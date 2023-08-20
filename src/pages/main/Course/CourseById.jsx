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
import { useQuery } from "react-query";
import { detailCourse } from "../../../api/course";
import BannerCourse from "../../../components/main/course/BannerCourse";
import SkeletonBannerCourse from "../../../components/skeleton/SkeletonBannerCourse";
const ListPosting = lazy(() =>
  import("../../../components/main/course/post/ListPosting")
);
const Posting = lazy(() =>
  import("../../../components/main/course/post/Posting")
);

const CourseById = () => {
  const { courseId } = useParams();
  const [isShowCreateTugas, setIsShowCreateTugas] = useState(false);
  const [isShowCreateAbsensi, setIsShowCreateAbsensi] = useState(false);
  const [showTugas, setShowTugas] = useState(false);
  const { subMenuActive } = useSubmenuActiveStore();
  const [userStatusInCourse, setUserStatusInCourse] = useState("");

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

  const { data, isLoading, isFetched } = useQuery(`course${courseId}`, {
    queryFn: async () => {
      const datas = await detailCourse(courseId);
      const detailCourseData = datas.data.data;
      setUserStatusInCourse(detailCourseData.CourseMember[0].status_member);
      return detailCourseData;
    },
  });

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
        {isLoading && <SkeletonBannerCourse />}
        {isFetched && <BannerCourse {...data} />}
        <div className="grid md:grid-cols-4 grid-cols-1 p-1 gap-2">
          <SubmenuCourseById />
          <div className="md:col-span-3 px-2 flex justify-center items-center flex-col gap-2">
            {subMenuActive === 0 && (
              <Suspense fallback={<>Loading...</>}>
                {userStatusInCourse ===
                  "instruktur" && (
                    <Posting
                      courseId={courseId}
                      handleIsShowCreateTugas={handleIsShowCreateTugas}
                      handleIsShowCreateAbsensi={handleIsShowCreateAbsensi}
                    />
                  )}
                <ListPosting
                  handleShowModalTugas={handleShowModalTugas}
                  courseId={courseId}
                />
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
