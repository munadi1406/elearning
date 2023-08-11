export default function SkeletonCardCourse() {
  return (
    <div className=" p-2 rounded-md h-full bg-slate-300 animate-pulse flex justify-start items-start gap-1 flex-col relative">
      <div className="flex h-8 justify-between w-full items-center">
        <div className="w-2/3 h-full bg-slate-600 animate-pulse block rounded-md"></div>
        <div className="w-1/6 h-full bg-slate-600 animate-pulse block rounded-md"></div>
      </div>
      <div className="w-2/3 h-5 bg-slate-600 animate-pulse block rounded-md" />
      <div className="w-2/3 h-4 bg-slate-600 animate-pulse block rounded-md" />
      <div className="w-2/3 h-8 bg-slate-600 animate-pulse block rounded-md" />
    </div>
  );
}
