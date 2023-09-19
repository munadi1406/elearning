import { useMutation, useQuery } from "react-query";
import { useState, lazy, Suspense } from "react";
import { detailPost, submitTugas } from "../../api/course";
import FileDropzone from "../FileDropzone";
import { useParams, useNavigate } from "react-router-dom";
import { useNotification } from "../../store/strore";
const DetailPengumuman = lazy(() => import("../pengumuman/DetailPengumuman"));
const DetailTugas = lazy(() => import("../assignment/DetailTugas"));
const Comments = lazy(() => import("../course/Comments"));
import ButtonPure from "../ButtonPure";
import splitJudul from "../../utils/splitJudul";
import { cancaleSubmit } from "../../api/tugas";
import IsSubmit from "../assignment/IsSubmit";
const BeforeSubmit = lazy(() => import("../quiz/BeforeSubmit"));


export default function DetailPost() {
  const [file, setFile] = useState([]);
  const { idPost, courseId } = useParams();
  const { setStatus, setMsgNotification, setStatusType } = useNotification();
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery(`idPost${idPost}`, {
    queryFn: async () => {
      const data = await detailPost(idPost);
      return data.data.data;
    },
    staleTime: 50000,
  });

  const isSubmit = useMutation({
    mutationFn: async (idTugas) => {
      return await submitTugas({ idTugas: idTugas, file: file[0] });
    },
    onSuccess: () => {
      refetch();
      setStatus(true);
      setStatusType(true);
      setMsgNotification("Tugas Berhasil Di Kirim");
    },
    onError: (error) => {
      setStatus(true);
      setStatusType(false);
      setMsgNotification(error.response.data.message);
    },
  });

  const isCancelSubmit = useMutation({
    mutationFn: async (idTugasSubmission) => {
      const data = await cancaleSubmit(idTugasSubmission);
      
      return data;
    },
    onSuccess: (data) => {
      refetch();
      setStatus(true);
      setStatusType(true);
      setMsgNotification(data.data.message);
    },
    onError: (error) => {
      setStatus(true);
      setStatusType(false);
      setMsgNotification(error.response.data.message);
    },
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  const handeNavigate = (idTugas) => {
    navigate(`../tugas/${idTugas}`);
  };
  return (
    <>
      <div className={`flex lg:flex-row flex-col w-full gap-2 p-2  `}>
        <div className={`flex ${data.typePost === "Kuis" && 'col-span-full'} w-full justify-center h-max items-start flex-col gap-2  `}>
          <div className="flex gap-2 text-blue1 font-semibold text-lg font-sans">
            {data.typePost !== "Kuis" && (
              <>
                <div>{splitJudul(data.judul)}</div>
                <div>-</div>
                <div>{data.typePost === 'Tugas' ? data.username: data.users.username}</div>
              </>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2 w-full">
            <Suspense fallback={<>Loading...</>}>
              {data.typePost === "Tugas" && <DetailTugas {...data} />}
              {data.typePost === "Pengumuman" && <DetailPengumuman {...data} />}
              {data.typePost === "Kuis" && <BeforeSubmit {...data} />}
            </Suspense>
            <div
              className={`flex ${data.typePost == "Pengumuman" && "hidden"}`}
            >
              {data.typePost !== "Kuis" && (
                <ButtonPure
                  text={"Lihat Pengumpulan Tugas"}
                  onClick={() => handeNavigate(data.id_tugas)}
                />
              )}
            </div>
          </div>
          <Suspense fallback={<>Loading...</>}>
            <Comments />
          </Suspense>
        </div>
        {data.typePost === "Tugas" && (
          <div className=" lg:w-2/6 w-full h-full rounded-md p-2 border">
            {data.id_tugas_submission ? (
              <IsSubmit {...data} isCancelSubmit={isCancelSubmit} courseId={courseId}/>
            ) : (
              <div className="flex  px-2 h-full rounded-md justify-center items-center flex-col gap-2">
                <FileDropzone onFilesAdded={setFile} />
                <ButtonPure
                  text={`${isSubmit.isLoading ? "Loading..." : "Kirim"}`}
                  disabled={isSubmit.isLoading}
                  style={`${
                    isSubmit.isLoading ? "cursor-not-allowed opacity-70" : ""
                  }`}
                  onClick={() => isSubmit.mutate(data.id_tugas)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
