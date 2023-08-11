import React,{Suspense,lazy} from "react";
import PropTypes from "prop-types";
import { useInfiniteQuery } from "react-query";
import { getCourseByIdUsers } from "../../../api/course";
const CardCourse = lazy(()=>import( "./CardCourse"));
import { useDataUser } from "../../../store/auth";
import SkeletonCardCourse from "../../skeleton/SkeletonCardCourse";


export default function ListCourseAsInstructor({ containerRef }) {
  const idUsers = useDataUser((state) => state.idUsers);
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("courseById", {
      queryFn: async ({ pageParam }) => {
        const data = await getCourseByIdUsers(idUsers, pageParam || 0);
        return data.data;
      },
      getNextPageParam: (lastPage) => lastPage.lastIdCourse,
      staleTime: 5000,
      refetchInterval:5000,
    });
    if(isLoading){
      return <SkeletonCardCourse/>
    }
  return (
    <Suspense fallback={<SkeletonCardCourse/>}>
      {!isLoading && data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.dataCourse.map((e, i) => (
            <CardCourse
              key={i}
              idCourse={e.id_course}
              course={e.course}
              desc={e.desc_course}
              pengajar={e.username}
              containerRef={containerRef}
            />
          ))}
        </React.Fragment>
      ))}
      <div className="col-span-full flex justify-center items-center">
        <button
          onClick={() => {
            fetchNextPage();
          }}
          disabled={!hasNextPage && isFetchingNextPage}
          className={`bg-blue1 rounded-md p-2 w-max text-white font-sans font-semibold text-sm ${
            !hasNextPage && "hidden"
          }  ${isFetchingNextPage ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      </div>
    </Suspense>
  );
}
ListCourseAsInstructor.propTypes = {
  containerRef: PropTypes.any.isRequired,
};
