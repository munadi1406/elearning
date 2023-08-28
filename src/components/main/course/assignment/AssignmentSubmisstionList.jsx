/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import CardStudentByTugas from "./CardStudentByAssignment";
import { useQuery } from "react-query";
import { listSubmitTugas } from "../../../../api/tugas";
import { useParams } from "react-router-dom";

const AssignmentSubmisstionList = () => {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const { idTugas } = useParams();
  // true === yang mengumpulkan
  // false === yang tidak mengumpulkan

  const { data, isLoading } = useQuery(`tugas-${idTugas}`, {
    queryFn: async () => {
      const data = await listSubmitTugas(idTugas);
      return data.data.data;
    },
  });

  const handleFilterSubmitted = () => {
    setIsSubmitted(!isSubmitted);
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="w-full  col-span-full p-2 flex flex-col gap-2">
      <select
        className="border-2 rounded-md px-2 h-max py-1 border-blue1 outline-none text-blue1 text-sm font-sans font-semibold"
        onChange={handleFilterSubmitted}
      >
        <option value="">Submitted</option>
        <option value="">Not Submitted</option>
      </select>
      <div className="grid ld:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full h-full overflow-y-auto">
        {isSubmitted ? (
          data[0].tugassubmission.map((e, i) => (
            <CardStudentByTugas
              key={i}
              student={e.users.username}
              idTugasSubmission={e.id_tugas_submission}
              idUsers={e.users.id_users}
              date={new Date(e.createdAt).toLocaleString()}
              score={e.nilai[0].nilai}
              file={e.file}
            />
          ))
        ) : (
          <>Oke</>
        )}
      </div>
    </div>
  );
};
export default AssignmentSubmisstionList;
