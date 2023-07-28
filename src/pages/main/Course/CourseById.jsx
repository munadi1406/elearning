import { useParams } from "react-router-dom";
import CardCourseById from "../../../components/main/course/CardCourseById";
import { BsSend } from "react-icons/bs";
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion";
import { useState } from "react";
import CardStudent from "../../../components/main/course/CardStudent";
import CreateTugas from "../../../components/main/course/CreateTugas";
import Setting from "../../../components/main/course/Setting";

const CourseById = () => {
  const { courseId } = useParams();
  const [sidebarActive, setSidebarActive] = useState(0);
  const [isShowCreateTugas, setIsShowCreateTugas] = useState(false);
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
  return (
    <>
      {isShowCreateTugas && (
        <CreateTugas handleClose={handleIsShowCreateTugas} />
      )}
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
          <div className="border-blue1 border-2 rounded-md  h-max">
            <div
              className={`border-b-2 cursor-pointer border-blue1 p-2 hover:bg-blue1 hover:text-white ${
                sidebarActive === 0 ? "bg-blue1 text-white" : "text-blue1"
              }`}
              onClick={() => setSidebarActive(0)}
            >
              Course
            </div>
            <div
              className={`border-b-2 cursor-pointer border-blue1 p-2 hover:bg-blue1 hover:text-white ${
                sidebarActive === 1 ? "bg-blue1 text-white" : "text-blue1"
              }`}
              onClick={() => setSidebarActive(1)}
            >
              Student
            </div>
            <div
              className={`border-b-2 cursor-pointer border-blue1 p-2 hover:bg-blue1 hover:text-white ${
                sidebarActive === 2 ? "bg-blue1 text-white" : "text-blue1"
              }`}
              onClick={() => setSidebarActive(2)}
            >
              Recap
            </div>
            <div
              className={` cursor-pointer border-blue1 p-2 hover:bg-blue1 hover:text-white ${
                sidebarActive === 3 ? "bg-blue1 text-white" : "text-blue1"
              }`}
              onClick={() => setSidebarActive(3)}
            >
              Setting
            </div>
          </div>
          <div className="md:col-span-3 px-2 flex justify-center items-center flex-col gap-2">
            {sidebarActive === 0 && (
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
                    <button className="w-full py-2 px-3 font-semibold rounded-md bg-blue1 font-sans text-white ">
                      Buat Absensi
                    </button>
                  </ScaleEffectMotion>
                </div>
                <div></div>
                {dataCourseById.map((e, i) => (
                  <CardCourseById key={i} {...e} />
                ))}
              </>
            )}
            {sidebarActive === 1 && (
              <div className="col-span-4 w-full">
                {dataStudent.map((e, i) => (
                  <CardStudent name={e.name} number={e.number} key={i} />
                ))}
              </div>
            )}
            {sidebarActive === 2 && (
              <div>
                <div>recap</div>
              </div>
            )}
            {sidebarActive === 3 && (
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
