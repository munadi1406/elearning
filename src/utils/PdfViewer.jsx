import { useParams } from "react-router-dom";

export default function PdfViewer() {
  const { idTugas, student } = useParams();
  
  return (
    <div className="w-full h-screen">
      <div className="text-blue1 text-md text-center w-full p-2 font-sans font-semibold">
        {student}
      </div>
      <figure className="w-full h-full">
        <embed
          src={`${
            import.meta.env.VITE_SOME_ENDPOINT_API
          }/fileTugasPreview/${idTugas}/${window.data.idUsers}/${window.data.file}`}
          className="embedSet"
          type="application/pdf"
          width={"100%"}
          height={"100%"}
        />
      </figure>
    </div>
  );
}
