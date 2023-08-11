import Header from "../layout/main/Header";
import { useEffect, lazy, Suspense } from "react";
import Footer from "../layout/main/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
const MyCourse = lazy(() => import("../pages/main/MyCourse"));
const Attedance = lazy(() => import("../pages/main/Attedance"));
const CourseWork = lazy(() => import("../pages/main/CourseWork"));
const CourseById = lazy(() => import("../pages/main/Course/CourseById"));
const Profile = lazy(() => import("../pages/main/Profile"));
import PrivateRoute from "../components/route/PrivateRoute";
import { useDataUser } from "../store/auth";
import JwtDecodedRf from "../utils/JwtDecodedRf";

const Main = () => {
  const refreshToken = sessionStorage.getItem("rt");
  const { setUsername, setIdUsers, setRole } = useDataUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!refreshToken) {
      navigate("/login");
      return;
    }
    const { id_users, username, role } = JwtDecodedRf(refreshToken);
    setUsername(username);
    setIdUsers(id_users);
    setRole(role);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-2">
      <Header />
      <div className="min-h-screen md:px-2 md:py-2 px-2 pt-2 pb-14">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <MyCourse />
                </PrivateRoute>
              }
            />
            <Route exact path="/attedance" element={<Attedance />} />
            <Route exact path="/course-work" element={<CourseWork />} />
            <Route exact path="/course/:courseId" element={<CourseById />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
