import { useState } from "react";
import CardStudentByTugas from "./CardStudentByAssignment";

const AssignmentSubmisstionList = () => {
  const dataTugas = [
    {
      student: "munadi",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
    {
      student: "sarah",
      date: "09:18 02-08-2023",
      file: "ini Tugas",
    },
  ];

  const [isSubmitted, setIsSubmitted] = useState(true);
  // true === yang mengumpulkan
  // false === yang tidak mengumpulkan

  const handleFilterSubmitted = () => {
    setIsSubmitted(!isSubmitted);
  };
  return (
    <div className="md:w-[700px] col-span-full p-2 gap-2 flex justify-center items-start flex-col">
      <select
        className="border-2 rounded-md px-2 py-1 border-blue1 outline-none text-blue1 text-sm font-sans font-semibold"
        onChange={handleFilterSubmitted}
      >
        <option value="">Submitted</option>
        <option value="">Not Submitted</option>
      </select>
      {isSubmitted
        ? dataTugas.map((e, i) => (
            <CardStudentByTugas
              key={i}
              student={e.student}
              date={e.date}
              file={e.file}
            />
          ))
        : dataTugas.map((e, i) => (
            <CardStudentByTugas key={i} student={e.student} />
          ))}
    </div>
  );
};

export default AssignmentSubmisstionList;
