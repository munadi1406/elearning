import { useState } from "react";
import PropTypes from "prop-types";

const TextTruncate = ({ text, maxWords }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const words = text.split(" ");
  const truncatedText = words.slice(0, maxWords).join(" ");
  const hasMore = words.length > maxWords;

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="h-max">
      <p>{isTruncated ? truncatedText : text}</p>
      {hasMore && (
        <div onClick={toggleTruncate} className="text-blue1 w-max font-semibold cursor-pointer underline ">
          {isTruncated ? "Read More" : "Show Less"}
        </div>
      )}
    </div>
  );
};

TextTruncate.propTypes = {
  text: PropTypes.string.isRequired,
  maxWords: PropTypes.number.isRequired,
};

export default TextTruncate;
