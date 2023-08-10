import { motion } from "framer-motion";
import { useState,useRef } from "react";
import { HiOutlineSwitchHorizontal, HiSearch } from "react-icons/hi";
import CardCourse from "../../components/main/course/CardCourse";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import JoinCourse from "../../components/main/course/JoinCourse";
import { useQuery } from "react-query";
import { getCourseByIdUsers } from "../../api/course";
import { useDataUser } from "../../store/auth";

const MyCourse = () => {
  const [switchCoursesActive, setSwitchCoursesActive] = useState(true);
  // true === my courses
  // false === courses
  const [isShowJoinCourseModal, setIsShowJoinCourseModal] = useState(false);
  const idUsers = useDataUser((state)=>state.idUsers);
  const containerRef = useRef()
  const handleSwitch = () => {
    setSwitchCoursesActive(!switchCoursesActive);
  };

  const handleShowJoinCouseModal = () => {
    setIsShowJoinCourseModal(!isShowJoinCourseModal);
  };

  const {data} = useQuery('courseById',{queryFn: async()=>{
    const data = await getCourseByIdUsers(idUsers)
    return data.data
  },
  onSuccess:(data)=>{
    console.log(data)
  },
  refetchInterval:5000
});
  const myCourseData = [
    {
      course: "Introduction to Computer Science",
      desc: "This course introduces the fundamentals of computer science, including algorithms, data structures, programming languages, and problem-solving techniques.",
      pengajar: "Jamal",
    },
    {
      course: "Calculus I",
      desc: "This course covers the basics of calculus, including limits, derivatives, and integrals of functions. It is essential for various fields such as engineering and physics.",
      pengajar: "Jamal",
    },
    {
      course: "Principles of Economics",
      desc: "This course provides an overview of microeconomics and macroeconomics, covering topics such as supply and demand, market structures, and national income.",
      pengajar: "Jamal",
    },
    {
      course: "Introduction to Psychology",
      desc: "This course introduces the scientific study of behavior and mental processes. Topics include perception, learning, memory, and psychological disorders.",
      pengajar: "Jamal",
    },
    {
      course: "World History",
      desc: "This course explores major events, developments, and societies throughout world history, from ancient civilizations to the modern era.",
      pengajar: "Jamal",
    },
    {
      course: "Introduction to Sociology",
      desc: "This course examines the basic concepts of sociology, including social institutions, culture, socialization, and the impact of social forces on individuals.",
      pengajar: "Jamal",
    },
    {
      course: "English Literature",
      desc: "This course studies significant works of English literature, including poetry, prose, and drama, from different historical periods and literary movements.",
      pengajar: "Jamal",
    },
    {
      course: "Environmental Science",
      desc: "This course explores environmental issues, ecological systems, natural resources, and sustainable practices to address environmental challenges.",
      pengajar: "Jamal",
    },
    {
      course: "Introduction to Business Management",
      desc: "This course provides an overview of business management principles, organizational behavior, marketing, finance, and human resources management.",
      pengajar: "Jamal",
    },
    {
      course: "Public Speaking",
      desc: "This course helps students overcome the fear of public speaking and improve their presentation skills, including effective techniques for delivering speeches.",
      pengajar: "Jamal",
    },
  ];

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
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 relative" ref={containerRef}>
              {switchCoursesActive && data
                ? data.map((e, i) => (
                    <CardCourse
                      key={i}
                      course={e.course}
                      desc={e.desc_course}
                      pengajar={"anonymous"}
                      containerRef={containerRef}
                    />
                  ))
                : myCourseData.map((e, i) => (
                    <CardCourse
                      key={i}
                      course={e.course}
                      desc={e.desc}
                      pengajar={e.pengajar}
                      containerRef={containerRef}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
