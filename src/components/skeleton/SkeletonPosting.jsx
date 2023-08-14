export default function SkeletonPosting() {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-2">
      <div className="flex gap-2 w-full">
        <div className="h-7 w-3/4 bg-gray-600 animate-pulse" />
        <div className="h-7 w-1/4 bg-gray-600 animate-pulse" />
      </div>
      <div className="w-full h-14 bg-gray-600 animate-pulse"/>
    </div>
  );
}
