import { useInfiniteQuery } from "react-query";
import React, { lazy, Suspense } from "react";
import { getCourseWhenUserAsMember } from "../../api/course";
import PropTypes from "prop-types";
import SkeletonCardCourse from "../skeleton/SkeletonCardCourse";
import ButtonPure from "../ButtonPure";

const CardCourse = lazy(() => import("./CardCourse"));

export default function ListCourseAsMember({ containerRef }) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("courseAsMember", {
      queryFn: async ({ pageParam }) => {
        const data = await getCourseWhenUserAsMember(pageParam || 0);
        return data.data;
      },
      getNextPageParam: (lastPage) => lastPage.lastIdCourse,
      staleTime: 5000,
      refetchInterval: 5000,
    });
  if (isLoading) {
    return <SkeletonCardCourse />;
  }
  return (
    <Suspense fallback={<SkeletonCardCourse />}>
      {!isLoading &&
        data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.dataCourse.map((e, i) => (
              <CardCourse
                key={i}
                idCourse={e.id_course}
                course={e.course}
                desc={e.desc_course}
                pengajar={e.user.username}
                academy={e.academy}
                containerRef={containerRef}
              />
            ))}
          </React.Fragment>
        ))}
        <div className="col-span-full flex justify-center items-center">
        <ButtonPure
          text={isFetchingNextPage ? "Loading..." : "Load More"}
          onClick={() => {
            fetchNextPage();
          }}
          disabled={!hasNextPage && isFetchingNextPage}
          style={` ${!hasNextPage && "hidden"}  ${
            isFetchingNextPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
      </div>
    </Suspense>
  );
}
ListCourseAsMember.propTypes = {
  containerRef: PropTypes.any.isRequired,
};
