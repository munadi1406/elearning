export default function SkeletonBannerCourse() {
  return (
    <div className="w-full h-40 relative bg-blue2 rounded-md px-3 py-2 flex justify-center items-start flex-col gap-2">
      <div className="w-80 rounded-md bg-white animate-pulse h-10"/>
      <div className="w-full h-16 rounded-md bg-white animate-pulse"/>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full">
        <div className="flex gap-2">
          <div className="bg-cream1 animate-pulse h-6 w-20 rounded-full"/>
          <div className="bg-blue1 animate-pulse h-6 w-20 rounded-full"/>
        </div>
        <div className="flex justify-end">
          <div className="bg-white animate-pulse w-52 rounded-md h-6"/>
        </div>
      </div>
    </div>
  );
}
