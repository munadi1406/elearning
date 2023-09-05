import { useInfiniteQuery } from "react-query";
import React, { Suspense, lazy } from "react";
import { tugasList } from "../../api/tugas";
import ButtonPure from "../ButtonPure";
const CardCourseWork = lazy(() => import("../course/CardCourseWork"));

export default function TugasList() {
  const { data, isLoading,fetchNextPage,isFetchingNextPage,hasNextPage } = useInfiniteQuery("list-tugas", {
    queryFn: async ({ pageParam }) => {
      const data = await tugasList(pageParam || 0);
      return data.data.data;
    },
    getNextPageParam: (pageParam) => pageParam.lastIdPost,
    staleTime: 10000,
  });
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        {data.pages.map((datas) =>
          datas.dataTugas.map((e, i) => (
            <React.Fragment key={i}>
              <CardCourseWork key={i} {...e} />
            </React.Fragment>
          ))
        )}
      </Suspense>
      <div className={`w-full flex p-2 justify-center items-center ${!hasNextPage && 'hidden'}`}>
        <ButtonPure text={isFetchingNextPage ? 'Loading...': 'Load More'} style={`${isFetchingNextPage && 'cursor-not-allowed opacity-70'}`} onClick={fetchNextPage} disabled={!hasNextPage || isFetchingNextPage}/>
      </div>
    </div>
  );
}
