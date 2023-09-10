import PropTypes from "prop-types";
import { useRef } from "react";
import { useEffect } from "react";

const RenderHtml = ({ text }) => {
  const containerRef = useRef();
  useEffect(() => {
    const container = containerRef.current;
    const ol = container.querySelectorAll("ol");
    const ul = container.querySelectorAll("ul");
    const li = container.querySelectorAll("li");
    const u = container.querySelectorAll("u");
    const a = container.querySelectorAll("a");
    const h1 = container.querySelectorAll("h1");
    const h2 = container.querySelectorAll("h2");
    const p = container.querySelectorAll("p");
    const h3 = container.querySelectorAll("h3");


    li.forEach((e) => {
      e.classList.add('break-words');
    });
    p.forEach((e) => {
      e.classList.add('break-words','overflow-clip');
    });
    ol.forEach((e) => {
      e.classList.add("list-decimal",'ml-5');
    });
    ul.forEach((e) => {
      e.classList.add("list-disc",'ml-5');
    });
    u.forEach((e) => {
      e.classList.add("underline-offset-1");
    });
    a.forEach((e) => {
      e.classList.add("text-blue-600",'underline');
    });
    h1.forEach((e) => {
      e.classList.add("text-2xl");
    });
    h2.forEach((e) => {
      e.classList.add("text-xl");
    });
    h3.forEach((e) => {
      e.classList.add("text-lg");
    });
  }, [text]);
  return (
    <div dangerouslySetInnerHTML={{ __html: text }} ref={containerRef} ></div>
  );
};

RenderHtml.propTypes = {
  text: PropTypes.string.isRequired,
};
export default RenderHtml;
