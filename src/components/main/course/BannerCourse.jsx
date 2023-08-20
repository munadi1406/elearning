import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegCheckCircle ,FaClipboard} from "react-icons/fa";

export default function BannerCourse({
  course,
  course_code,
  academy,
  user,
  desc_course,
}) {

const [copy,setCopy] = useState(false)
  const handleCopy = ()=>{
    setCopy(true)
    navigator.clipboard.writeText(course_code)
    const timeOut = setTimeout(() => {
      setCopy(false)
    }, 2000);
    return ()=>{
      clearTimeout(timeOut)
    }
  }
  return (
    <div className="w-full h-40 relative">
      <div className="relative z-10 text-white font-semibold h-full flex justify-between items-start flex-col font-sans w-full px-3 py-2">
        <div className="text-xl ">{course}</div>
        <div className="text-xs  py-1 flex-grow">{desc_course}</div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full">
          <div className="flex gap-2 justify-start items-center">
            <div className="text-xs rounded-full bg-cream1 py-1 px-2">
              {academy}
            </div>
            <div className="text-xs rounded-full bg-blue1 py-1 px-2">
              {user.username}
            </div>
          </div>
          <div className="text-base flex gap-2 justify-end items-center">
            <div>Course Code </div>
            <div className={`${copy ? 'bg-green-400/70':'bg-slate-600/20'} backdrop-blur-sm  rounded-md p-2 flex gap-2 items-center`}>
              <div>{copy ? "Copied" : course_code}</div>
              <div className="cursor-pointer" onClick={handleCopy}>
                {copy ? <FaRegCheckCircle/> : <FaClipboard/>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-blue-400 absolute top-0 left-0 z-0 rounded-md"></div>
    </div>
  );
}

BannerCourse.propTypes = {
  course: PropTypes.string.isRequired,
  course_code: PropTypes.string.isRequired,
  academy: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  desc_course: PropTypes.string.isRequired,
};
