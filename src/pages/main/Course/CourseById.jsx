import { useParams } from "react-router-dom";
import CardAssignmentByCourse from "../../../components/main/course/assignment/CardAssignmentByCourse";
import { BsSend } from "react-icons/bs";
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion";
import { useState } from "react";
import CardStudent from "../../../components/main/course/CardStudent";
import ModalCreateAssignment from "../../../components/main/course/assignment/ModalCreateAssignment";
import Setting from "../../../components/main/course/Setting";
import CreateAbsensi from "../../../components/main/absensi/CreateAbsensi";
import ModalDetailAssignment from "../../../components/main/course/assignment/ModalDetailAssignment";
import SubmenuCourseById from "../../../components/main/course/SubmenuCourseById";
import { useSubmenuActiveStore } from "../../../store/search";

const CourseById = () => {
  const { courseId } = useParams();
  const [isShowCreateTugas, setIsShowCreateTugas] = useState(false);
  const [isShowCreateAbsensi,setIsShowCreateAbsensi] = useState(false)
  const [showTugas,setShowTugas] = useState(false);
  const {subMenuActive} = useSubmenuActiveStore()
  console.log(courseId);

  const dataCourseById = [
    {
      tugas: "Tugas 1",
      fromDate: "06:48 28-07-2023",
      toDate: "06:48 28-07-2023",
      desc: "Buatlah Sebuah Website landing page dengan html dan css ",
    },
    {
      tugas: "Tugas 2",
      fromDate: "06:48 28-07-2023",
      toDate: "06:48 28-07-2023",
      desc: "Buatlah Sebuah Website landing page dengan html dan css ",
    },
  ];

  const dataStudent = [
    {
      name: "Munadi",
      number: "08123456789",
    },
    {
      name: "sarah",
      number: "08123456789",
    },
  ];

  const handleIsShowCreateTugas = () => {
    setIsShowCreateTugas(!isShowCreateTugas);
  };


  const handleIsShowCreateAbsensi =()=>{
    setIsShowCreateAbsensi(!isShowCreateAbsensi)
  }

  const handleShowModalTugas = ()=>{
    console.log("runnn")
    setShowTugas(!showTugas)
  }

  return (
    <>
      {isShowCreateTugas && (
        <ModalCreateAssignment handleClose={handleIsShowCreateTugas} />
      )}
      {isShowCreateAbsensi && (<CreateAbsensi handleClose={handleIsShowCreateAbsensi}/>)}
      {showTugas && (<ModalDetailAssignment handleClose={handleShowModalTugas} type="tugas"/>)}
      <div className="md:px-10 px-2">
        <div className="w-full h-40 relative">
          <div className="relative z-10 text-white h-full flex justify-between items-start flex-col font-sans text-3xl font-semibold w-full px-3 py-2">
            <div>Belajar Javascript</div>
            <div className="text-lg ">
              Kode Keleas : <span>aiJieka82</span>
            </div>
          </div>

          <div className="w-full h-full bg-blue-400 absolute top-0 left-0 z-0 rounded-md"></div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 p-1 gap-2">
          <SubmenuCourseById/>
          <div className="md:col-span-3 px-2 flex justify-center items-center flex-col gap-2">
            {subMenuActive === 0 && (
              <>
                <div className="bg-blue1 p-2 px-3 rounded-md flex w-full">
                  <form
                    action=""
                    className="flex w-full bg-white rounded-md p-2 justify-center items-center"
                  >
                    <input
                      type="text"
                      className="w-full bg-transparent border-none outline-none rounded-md text-sm"
                      placeholder="Pengunguman..."
                    />
                    <ScaleEffectMotion>
                      <button
                        type="submit"
                        className="bg-blue1 rounded-md p-1 px-2 text-white"
                      >
                        <BsSend />
                      </button>
                    </ScaleEffectMotion>
                  </form>
                </div>
                <div className="w-full grid grid-cols-2 gap-2">
                  <ScaleEffectMotion>
                    <button
                      className="w-full py-2 px-3 font-semibold rounded-md bg-cream1 font-sans text-white "
                      onClick={handleIsShowCreateTugas}
                    >
                      Buat Tugas
                    </button>
                  </ScaleEffectMotion>
                  <ScaleEffectMotion>
                    <button className="w-full py-2 px-3 font-semibold rounded-md bg-blue1 font-sans text-white " onClick={handleIsShowCreateAbsensi}>
                      Buat Absensi
                    </button>
                  </ScaleEffectMotion>
                </div>
                <div></div>
                {dataCourseById.map((e, i) => (
                  <CardAssignmentByCourse key={i} {...e} showModalTugas={handleShowModalTugas}/>
                ))}
              </>
            )}
            {subMenuActive === 1 && (
              <div className="col-span-4 w-full">
                {dataStudent.map((e, i) => (
                  <CardStudent name={e.name} number={e.number} key={i} />
                ))}
              </div>
            )}
            {subMenuActive === 2 && (
              <div>
                <div>recap</div>
              </div>
            )}
            {subMenuActive === 3 && (
              <div className="col-span-4 w-full">
               <Setting course={"Belajar Javascript"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseById;
