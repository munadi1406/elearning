import PropTypes from "prop-types";
import Button from "../../components/Button";
import WithMotionWhileView from "../../utils/WithMotionWhileView";


// eslint-disable-next-line react-refresh/only-export-components
const CardPost = ({ course, date, content }) => {
  return (
    <div className="bg-blue2 rounded-md p-2 w-full flex justify-center  items-start flex-col gap-2">
      <div>
        <div className="text-md font-sans text-white font-semibold">
          {course}
        </div>
        <div className="text-[10px] font-sans text-white ">{date}</div>
      </div>
      <div className="text-white font-sans text-lg font-semibold ">
        {content}
      </div>
      <Button text="See Course" color={"bg-blue1"} to="#" />
    </div>
  );
};

CardPost.propTypes = {
  course: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default WithMotionWhileView(CardPost);
