import Header from "../layout/main/Header";
import Footer from "../layout/main/Footer";
import { Route, Routes,useNavigate } from "react-router-dom";
import MyCourse from "../pages/main/MyCourse";
import Attedance from "../pages/main/Attedance";
import CourseWork from "../pages/main/CourseWork";
import CourseById from "../pages/main/Course/CourseById";
import Profile from "../pages/main/Profile";
import PrivateRoute from "../components/route/PrivateRoute";
import { useToken } from "../store/auth";
import { useEffect } from "react";

const Main = () => {
  const refreshToken = useToken((state)=>state.refreshToken);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!refreshToken){
      navigate('/login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="p-2">
      <Header />
      <div className="min-h-screen md:px-2 md:py-2 px-2 pt-2 pb-14">
        <Routes>
          <Route exact path="/" element={<PrivateRoute><MyCourse/></PrivateRoute>} />
          <Route exact path="/attedance" element={<Attedance />} />
          <Route exact path="/course-work" element={<CourseWork />} />
          <Route exact path="/course/:courseId" element={<CourseById />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
