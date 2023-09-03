import { useMutation, useQuery } from "react-query";
import Comments from "../Comments";
import { useState, lazy, Suspense } from "react";
import { detailPost, submitTugas } from "../../../../api/course";
import FileDropzone from "./../../../FileDropzone";
import { useParams,useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { useNotification } from "../../../../store/strore";
const DetailPengumuman = lazy(() => import("./DetailPengumuman"));
const DetailTugas = lazy(() => import("./DetailTugas"));
import ButtonPure from "../../../ButtonPure";
// import { cancaleSubmit } from "../../../../api/tugas";

export default function DetailAssignment() {
  const [file, setFile] = useState([]);
  const { idPost, courseId } = useParams();
  const { setStatus, setMsgNotification, setStatusType } = useNotification();
  const navigate = useNavigate()

  const { data,  isLoading, refetch } = useQuery(`idPost${idPost}`, {
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

  // const isCancelSubmit = useMutation({
  //   mutationFn: async (idTugasSubmission) => {
  //     return await cancaleSubmit(idTugasSubmission);
  //   },
  //   onSuccess: () => {
  //     refetch();
  //     setStatus(true);
  //     setStatusType(true);
  //     setMsgNotification("Tugas Berhasil Di Kirim");
  //   },
  //   onError: (error) => {
  //     setStatus(true);
  //     setStatusType(false);
  //     setMsgNotification(error.response.data.message);
  //   },
  // });
  

  if (isLoading) {
    return <>Loading...</>;
  }

  const handeNavigate = (idTugas)=>{
    navigate(`../tugas/${idTugas}`)
  }
  let judul = data.judul.split(' ');
  let judulOri = judul.shift();
  let judulTanggal = judul.join(' ');
  const tanggalToLocalString = new Date(judulTanggal).toLocaleString()

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-2 p-2">
        <div className="flex col-span-2 justify-center h-max items-start flex-col gap-2">
          <div className="flex gap-2 text-blue1 font-semibold text-lg font-sans">
            <div>{`${judulOri}  ${tanggalToLocalString}`}</div>
            <div>-</div>
            <div>{data.username}</div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Suspense fallback={<>Loading...</>}>
              {data.typePost === "Tugas" ? (
                <DetailTugas {...data} />
              ) : (
                <DetailPengumuman {...data} />
              )}
            </Suspense>
            <div className={`flex ${data.typePost == 'Pengumuman' && 'hidden'}`}>
              <ButtonPure text={"Lihat Pengumpulan Tugas"} onClick={()=>handeNavigate(data.id_tugas)}/>
            </div>
          </div>
          <Comments />
        </div>
        {data.typePost === "Tugas" && (
          <div className="border-2 h-full rounded-md p-2">
            {data.id_tugas_submission ? (
              <div>
                  <div className="w-full p-3">
                    <div className="rounded-md bg-blue1/80 backdrop-blur-sm p-2 flex justify-between items-center">
                      <a
                        className=" text-white font-sans text-base hover:underline"
                        href={`${
                          import.meta.env.VITE_SOME_ENDPOINT_API
                        }/file/${courseId}/${data.fileIsSubmit}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {data.fileIsSubmit}
                      </a>
                      <div>
                        <ImCancelCircle color={"white"} />
                      </div>
                    </div>
                    <div className="text-base font-sans font-regular text-blue1">
                      Nilai : 0
                    </div>
                  </div>
              </div>
            ) : (
              <div className="flex px-2   h-full rounded-md justify-center items-center flex-col gap-2">
                <FileDropzone onFilesAdded={setFile} />
                <ButtonPure
                  text={`${isSubmit.isLoading ? "Loading..." : "Kirim"}`}
                  disabled={isSubmit.isLoading}
                  style={isLoading ? "cursor-not-allowed opacity-70" : ""}
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
