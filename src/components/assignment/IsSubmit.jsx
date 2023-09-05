import PropTypes from "prop-types";
import { ImCancelCircle } from "react-icons/im";

export default function IsSubmit({ submitAt,fileIsSubmit,courseId,id_tugas_submission,nilai,isCancelSubmit }) {
  return (
    <div>
      <div className="w-full p-3 flex flex-col gap-2">
        <div className="text-xs font-sans text-blue1">
          Submit At : {new Date(submitAt).toLocaleString()}
        </div>
        <div className="rounded-md bg-gradient-to-r from-blue1 to-blue2  backdrop-blur-sm p-2 flex justify-between items-center">
          <a
            className=" text-white font-sans text-xs hover:underline"
            href={`${import.meta.env.VITE_SOME_ENDPOINT_API}/file/${courseId}/${
              fileIsSubmit
            }`}
            target="_blank"
            rel="noreferrer"
          >
            {fileIsSubmit}
          </a>
          <div
            className="cursor-pointer"
            onClick={() => isCancelSubmit.mutate(id_tugas_submission)}
          >
            <ImCancelCircle color={"white"} />
          </div>
        </div>
        <div className="text-base font-sans font-regular text-blue1">
          Nilai : {nilai}
        </div>
      </div>
    </div>
  );
}

IsSubmit.propTypes ={
    submitAt:PropTypes.string.isRequired,
    fileIsSubmit:PropTypes.string.isRequired,
    id_tugas_submission:PropTypes.number.isRequired,
    nilai:PropTypes.string,
    isCancelSubmit:PropTypes.object.isRequired,
    courseId:PropTypes.string.isRequired,

}
