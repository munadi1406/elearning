import { useMutation, useQuery } from "react-query";
import Comments from "../Comments";
import { useState } from "react";
import { detailPost, submitTugas } from "../../../../api/course";
import FileDropzone from "./../../../FileDropzone";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { useNotification } from "../../../../store/strore";

export default function DetailAssignment() {
  const [file, setFile] = useState([]);
  const { idPost,courseId } = useParams();
  const { setStatus, setMsgNotification,setStatusType } = useNotification();

  const { data, isFetched, isLoading, refetch } = useQuery(`idPost${idPost}`, {
    queryFn: async () => {
      const data = await detailPost(idPost);
      return data.data.data;
    },
    staleTime:50000
  });

  useEffect(() => {
    console.log(file);
  }, [file]);

  const { mutate } = useMutation({
    mutationFn: async (idTugas) => {
      return await submitTugas({ idTugas: idTugas, file: file[0] });
    },
    onSuccess: () => {
      refetch();
      setStatus(true);
      setMsgNotification("Tugas Berhasil Di Kirim");
    },
    onError: (error) => {
      setStatus(true);
      setStatusType(false);
      setMsgNotification("Tugas Gagal Dikirim");
      console.log({ error });
    },
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  const tugas = isFetched && data.tugas ? data.tugas[0] : data.pengumuman[0];

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-2 p-2">
      <div className="flex col-span-2 justify-center h-max items-start flex-col gap-2">
        <div className="flex gap-2 text-blue1 font-semibold text-lg font-sans">
          <div>{data.judul}</div>
          <div>-</div>
          <div>Jamal</div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {data.tugas ? (
            <>
              <div className="text-sm font-sans text-blue1">
                Date : {new Date(tugas.fromDate).toLocaleString()} -{" "}
                {new Date(tugas.toDate).toLocaleString()}
              </div>
              <div className="text-sm font-sans text-blue1">
                File Soal : <a href="#">{tugas.file}</a>
              </div>
              <div className="text-sm font-sans text-blue1">
                Accept : {tugas.accept}
              </div>
              <div className="text-base font-sans text-blue1 flex gap-2">
                <div>Deskripsi Tugas : </div>
                <div>{tugas.deskripsi}</div>
              </div>
            </>
          ) : (
            <div className="text-base font-sans text-blue1">{tugas.konten}</div>
          )}
        </div>
        <Comments />
      </div>
      {data.tugas && (
        <div className="border-2 h-full rounded-md p-2">
          {tugas.tugassubmission.length > 0 ? (
            <div>
              {tugas.tugassubmission.map((e, i) => (
                <div key={i} className="w-full p-3">
                  <div className="rounded-md bg-blue1/80 backdrop-blur-sm p-2 flex justify-between items-center">
                    <a className=" text-white font-sans text-base hover:underline" href={`${import.meta.env.VITE_SOME_ENDPOINT_API}/file/${courseId}/${tugas.file}`} target="_blank" rel="noreferrer">
                      {e.file}
                    </a>
                    <div>
                      <ImCancelCircle color={"white"} />
                    </div>
                  </div>
                  <div className="text-base font-sans font-regular text-blue1">
                    Nilai : 0
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex px-2  h-full rounded-md justify-center items-center flex-col gap-2">
              <FileDropzone onFilesAdded={setFile} />
              <button
                onClick={() => mutate(tugas.id_tugas)}
                className="bg-blue1 w-full rounded-md p-2 text-white font-sans font-semibold text-base active:scale-95 cursor-pointer"
              >
                Kirim
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
