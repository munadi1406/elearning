import Header from "../layout/main/Header";
import Footer from "../layout/main/Footer";
import { Route, Routes } from "react-router-dom";
import MyCourse from "../pages/main/MyCourse";
import Attedance from "../pages/main/Attedance";
import CourseWork from "../pages/main/CourseWork";
import CourseById from "../pages/main/Course/CourseById";

const Main = () => {
  return (
    <div className="p-2">
      <Header />
      <div className="min-h-screen md:px-2 md:py-2 px-2 pt-2 pb-14">
        <Routes>
          <Route exact path="/" element={<MyCourse />} />
          <Route exact path="/attedance" element={<Attedance />} />
          <Route exact path="/course-work" element={<CourseWork />} />
          <Route exact path="/course/:courseId" element={<CourseById />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
