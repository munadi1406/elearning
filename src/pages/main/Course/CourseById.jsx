import { useParams } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
const ModalCreatePost = lazy(() =>
  import("../../../components/post/ModalCreatePost")
);
const Setting = lazy(() => import("../../../components/course/Setting"));
const CreateAbsensi = lazy(() =>
  import("../../../components/absensi/CreateAbsensi")
);
import SubmenuCourseById from "../../../components/course/SubmenuCourseById";
import { useSubmenuActiveStore } from "../../../store/search";
import { useQuery } from "react-query";
import { detailCourse } from "../../../api/course";
import BannerCourse from "../../../components/course/BannerCourse";
import SkeletonBannerCourse from "../../../components/skeleton/SkeletonBannerCourse";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
const DetailPost = lazy(() => import("../../../components/post/DetailPost"));
const AssignmentSubmisstionList = lazy(() =>
  import("../../../components/assignment/AssignmentSubmisstionList")
);
const ListPosting = lazy(() => import("../../../components/post/ListPosting"));
const Posting = lazy(() => import("../../../components/post/Posting"));
const ListMember = lazy(() => import("../../../components/member/ListMember"));

const CourseById = () => {
  const { courseId } = useParams();
  const [isShowCreateTugas, setIsShowCreateTugas] = useState(false);
  const [isShowCreateAbsensi, setIsShowCreateAbsensi] = useState(false);
  const [showTugas, setShowTugas] = useState(false);
  const { subMenuActive } = useSubmenuActiveStore();
  const [userStatusInCourse, setUserStatusInCourse] = useState("");

  const { data, isLoading, isFetched } = useQuery(`course-${courseId}`, {
    queryFn: async () => {
      const datas = await detailCourse(courseId);
      const detailCourseData = datas.data.data;
      setUserStatusInCourse(detailCourseData.member[0].status_member);
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
    setShowTugas(!showTugas);
  };

  return (
    <>
      {isShowCreateTugas && (
        <Suspense>
          <ModalCreatePost handleClose={handleIsShowCreateTugas} />
        </Suspense>
      )}
      {isShowCreateAbsensi && (
        <Suspense>
          <CreateAbsensi handleClose={handleIsShowCreateAbsensi} />
        </Suspense>
      )}
      <div className="md:px-10 w-full">
        {isLoading && <SkeletonBannerCourse />}
        {isFetched && <BannerCourse {...data} />}

        <Routes>
          <Route
            path="/"
            element={
              <div className="grid md:grid-cols-4 grid-cols-1 p-1 gap-2">
                <SubmenuCourseById statusUser={userStatusInCourse}/>
                <div className="md:col-span-3 px-2 flex justify-center items-center flex-col gap-2">
                  {subMenuActive === 0 && (
                    <Suspense fallback={<>Loading...</>}>
                      {userStatusInCourse === "instruktur" && (
                        <Posting
                          courseId={courseId}
                          handleIsShowCreateTugas={handleIsShowCreateTugas}
                          handleIsShowCreateAbsensi={handleIsShowCreateAbsensi}
                        />
                      )}
                      <ListPosting
                        handleShowModalTugas={handleShowModalTugas}
                        statusUser={userStatusInCourse}
                        courseId={courseId}
                      />
                    </Suspense>
                  )}
                  {subMenuActive === 1 && (
                    <div className="col-span-4 w-full">
                      <Suspense fallback={<>Loading...</>}>
                        <ListMember />
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
            }
          />

          <Route
            path="/post/:idPost"
            element={
              <Suspense fallback={<>Loading...</>}>
                <DetailPost />
              </Suspense>
            }
          />
          <Route
            path="/tugas/:idTugas"
            element={
              <Suspense fallback={<>Loading...</>}>
                <AssignmentSubmisstionList />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default CourseById;
