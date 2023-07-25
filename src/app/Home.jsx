import Header from "../layout/main/Header";
import Footer from "../layout/main/Footer";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/home/Index";
import MyCourse from "../pages/home/MyCourse";
import Attedance from "../pages/home/Attedance";
import CourseWork from "../pages/home/CourseWork";

const Home = () => {
  return (
    <div className="p-2">
      <Header />
      <div className="min-h-screen p-2">
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/my-course" element={<MyCourse />} />
          <Route exact path="/attedance" element={<Attedance />} />
          <Route exact path="/course-work" element={<CourseWork />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
