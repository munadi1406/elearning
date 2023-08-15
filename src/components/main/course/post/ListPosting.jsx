import { Suspense, lazy } from "react";
import { useQuery } from "react-query";
import { post } from "../../../../api/course";
const CardPosting = lazy(() => import("./CardPosting"));
import SkeletonPosting from "../../../skeleton/SkeletonPosting";
import PropTypes from 'prop-types'

export default function ListPosting({ courseId, handleShowModalTugas }) {
    const { data, isLoading } = useQuery(`postCourse${courseId}`, {
        queryFn: async () => {
          const { data } = await post(courseId);
          console.log(data);
          console.log("feching list post")
          return data.data
        },
        staleTime:5000
      })
      if(isLoading){
        return <SkeletonPosting/>
      }
  return (
    <>
      <Suspense fallback={<SkeletonPosting/>}>
        {data.map((e, i) => (
            <CardPosting
              key={i}
              {...e}
              showModalTugas={handleShowModalTugas}
            />
          ))}
      </Suspense>
    </>
  );
}
ListPosting.propTypes ={
    courseId:PropTypes.string.isRequired,
    handleShowModalTugas:PropTypes.func.isRequired
}
