import { useParams } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import ModalCreateAssignment from "../../../components/main/course/assignment/ModalCreateAssignment";
const CardStudent = lazy(() =>
  import("../../../components/main/course/CardStudent")
);
const Setting = lazy(() => import("../../../components/main/course/Setting"));
import CreateAbsensi from "../../../components/main/absensi/CreateAbsensi";
import ModalDetailAssignment from "../../../components/main/course/assignment/ModalDetailAssignment";
import SubmenuCourseById from "../../../components/main/course/SubmenuCourseById";
import { useSubmenuActiveStore } from "../../../store/search";
const ListPosting = lazy(() => import("../../../components/main/course/post/ListPosting"));
const Posting = lazy(() => import("../../../components/main/course/post/Posting"));

const CourseById = () => {
  const { courseId } = useParams();
  const [isShowCreateTugas, setIsShowCreateTugas] = useState(false);
  const [isShowCreateAbsensi, setIsShowCreateAbsensi] = useState(false);
  const [showTugas, setShowTugas] = useState(false);
  const { subMenuActive } = useSubmenuActiveStore();

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

  const handleIsShowCreateAbsensi = () => {
    setIsShowCreateAbsensi(!isShowCreateAbsensi);
  };

  const handleShowModalTugas = () => {
    console.log("runnn");
    setShowTugas(!showTugas);
  };

  return (
    <>
      {isShowCreateTugas && (
        <ModalCreateAssignment handleClose={handleIsShowCreateTugas} />
      )}
      {isShowCreateAbsensi && (
        <CreateAbsensi handleClose={handleIsShowCreateAbsensi} />
      )}
      {showTugas && (
        <ModalDetailAssignment
          handleClose={handleShowModalTugas}
          type="tugas"
        />
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
          <SubmenuCourseById />
          <div className="md:col-span-3 px-2 flex justify-center items-center flex-col gap-2">
            {subMenuActive === 0 && (
              <Suspense fallback={<>Loading...</>}>
                <Posting courseId={courseId} handleIsShowCreateTugas={handleIsShowCreateTugas} handleIsShowCreateAbsensi={handleIsShowCreateAbsensi} />
                <ListPosting handleShowModalTugas={handleShowModalTugas} courseId={courseId} />
              </Suspense>
            )}
            {subMenuActive === 1 && (
              <div className="col-span-4 w-full">
                <Suspense fallback={<>Loading...</>}>
                  {dataStudent.map((e, i) => (
                    <CardStudent name={e.name} number={e.number} key={i} />
                  ))}
                </Suspense>
              </div>
            )}
            {subMenuActive === 2 && (
              <div>
                <div>recap</div>
              </div>
            )}
            {subMenuActive === 3 && (
              <div className="col-span-4 w-full">
                <Suspense fallback={<>Loading...</>}>
                  <Setting course={"Belajar Javascript"} />
                </Suspense>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseById;
