import { useSubmenuActiveStore } from "../../../store/search"

export default function SubmenuCourseById() {
    const {subMenuActive,setSubmenuActive} = useSubmenuActiveStore()
  return (
    <div className="border-blue1 border-2 rounded-md  h-max">
            <div
              className={`border-b-2 cursor-pointer border-blue1 p-2 hover:bg-blue1 hover:text-white ${
                subMenuActive === 0 ? "bg-blue1 text-white" : "text-blue1"
              }`}
              onClick={() => setSubmenuActive(0)}
            >
              Course
            </div>
            <div
              className={`border-b-2 cursor-pointer border-blue1 p-2 hover:bg-blue1 hover:text-white ${
                subMenuActive === 1 ? "bg-blue1 text-white" : "text-blue1"
              }`}
              onClick={() => setSubmenuActive(1)}
            >
              Student
            </div>
            <div
              className={`border-b-2 cursor-pointer border-blue1 p-2 hover:bg-blue1 hover:text-white ${
                subMenuActive === 2 ? "bg-blue1 text-white" : "text-blue1"
              }`}
              onClick={() => setSubmenuActive(2)}
            >
              Recap
            </div>
            <div
              className={` cursor-pointer border-blue1 p-2 hover:bg-blue1 hover:text-white ${
                subMenuActive === 3 ? "bg-blue1 text-white" : "text-blue1"
              }`}
              onClick={() => setSubmenuActive(3)}
            >
              Setting
            </div>
          </div>
  )
}
