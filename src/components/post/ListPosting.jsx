import React, { Suspense, lazy } from "react";
import { useInfiniteQuery } from "react-query";
import { post } from "../../api/course";
const CardPosting = lazy(() => import("./CardPosting"));
import SkeletonPosting from "../skeleton/SkeletonPosting";
import PropTypes from "prop-types";

export default function ListPosting({ courseId, handleShowModalTugas,statusUser }) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(`postCourse${courseId}`, {
      queryFn: async ({ pageParam }) => {
        const data = await post(courseId, pageParam || 0);
        return data.data;
      },
      getNextPageParam: (lastPage) => lastPage.data.lastIdPost,
      refetchInterval: 5000,
    });
  if (isLoading) {
    return <SkeletonPosting />;
  }
  return (
    <>
      <Suspense fallback={<SkeletonPosting />}>
        {!isLoading &&
          data.pages.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.data.dataPost.map((e, i) => (
                <CardPosting
                  key={i}
                  {...e}
                  statusUser={statusUser}
                  showModalTugas={handleShowModalTugas}
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
    </>
  );
}
ListPosting.propTypes = {
  courseId: PropTypes.string.isRequired,
  statusUser:PropTypes.string.isRequired,
  handleShowModalTugas: PropTypes.func.isRequired,
};
