import React,{lazy,Suspense} from "react";
import { useInfiniteQuery } from "react-query";
const CardStudent = lazy(()=>import( "../CardStudent"));
import { useParams } from "react-router-dom";
import { listMember } from "../../../../api/course";

export default function ListMember() {
  const { courseId } = useParams();
  const { data, isLoading } = useInfiniteQuery(`member-${courseId}`, {
    queryFn: async ({ pageParam }) => {
      const datas = await listMember(courseId, pageParam || 0);
      return datas.data;
    },
  });
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div>
    <Suspense fallback={<>Please Wait...</>}>
      {data.pages.map((page) =>
        page.data.dataMember.map((e, i) => (
          <React.Fragment key={i}>
            <CardStudent name={e.users.username} number={e.users.phoneNumber} statusMember={e.status_member}/>
          </React.Fragment>
        ))
      )}
    </Suspense>
    </div>
  );
}
