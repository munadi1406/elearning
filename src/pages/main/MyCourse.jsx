import { motion } from "framer-motion";
import { useState, useRef, lazy, Suspense } from "react";
import { HiOutlineSwitchHorizontal, HiSearch } from "react-icons/hi";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import JoinCourse from "../../components/main/course/JoinCourse";
import ListCourseAsInstructor from "../../components/main/course/ListCourseAsInstructor";
const ListCourseAsMember = lazy(() =>
  import("../../components/main/course/ListCourseAsMember")
);

const MyCourse = () => {
  // true === my courses
  // false === courses
  const [switchCoursesActive, setSwitchCoursesActive] = useState(true);
  const [isShowJoinCourseModal, setIsShowJoinCourseModal] = useState(false);
  const containerRef = useRef();

  const handleSwitch = () => {
    setSwitchCoursesActive(!switchCoursesActive);
  };

  const handleShowJoinCouseModal = () => {
    setIsShowJoinCourseModal(!isShowJoinCourseModal);
  };
  return (
    <>
      {isShowJoinCourseModal && (
        <JoinCourse handleShowJoinCouseModal={handleShowJoinCouseModal} />
      )}
      <div>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div className="flex md:justify-start justify-between items-center gap-2">
              <h1 className="lg:text-2xl md:text-lg text-xs text-blue1 font-sans font-semibold ">
                {switchCoursesActive ? "My Courses" : "Courses"} /
              </h1>
              <ScaleEffectMotion>
                <button
                  className="bg-blue2 text-white font-semibold font-sans lg:text-lg md:text-sm text-xs p-2 rounded-md flex justify-center items-center gap-2"
                  onClick={handleSwitch}
                >
                  Switch To {switchCoursesActive ? "Courses" : "My Courses"}
                  <span>
                    <HiOutlineSwitchHorizontal />
                  </span>
                </button>
              </ScaleEffectMotion>
              <ScaleEffectMotion>
                <button
                  className="bg-blue2 text-white font-semibold font-sans lg:text-lg md:text-sm text-xs p-2 rounded-md flex justify-center items-center"
                  onClick={handleShowJoinCouseModal}
                >
                  Join Course
                </button>
              </ScaleEffectMotion>
            </div>
            <div className="flex md:justify-end justify-center items-center">
              <div className="flex md:w-max w-full md:justify-center justify-between items-center border-blue1 border-2 py-1 px-2 rounded-md">
                <input
                  type="search"
                  placeholder="Search..."
                  className="border-none outline-none bg-transparent h-full"
                />
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue1 rounded-md p-1"
                >
                  <HiSearch color="white" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="py-2 ">
            <div
              className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 relative"
              ref={containerRef}
            >
              <Suspense>
                {switchCoursesActive ? (
                  <ListCourseAsInstructor containerRef={containerRef} />
                ) : (
                  <ListCourseAsMember containerRef={containerRef} />
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
