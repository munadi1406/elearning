
import { lazy, Suspense } from "react";
const TugasList = lazy(() => import("../../components/assignment/TugasList"));

const CourseWork = () => {
  return (
    <div>
      <Suspense>
        <TugasList />
      </Suspense>
    </div>
  );
};

export default CourseWork;
