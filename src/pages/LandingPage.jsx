import Hero from "../components/landingPage/Hero";
import Footer from "../layout/landingPage/Footer";
import Header from "../layout/landingPage/Header";
import Content from "../components/landingPage/Content";
import { useState } from "react";
import { useEffect } from "react";
import Universe from "../assets/universe.svg";

export default function LandingPage() {
  const [isUniverseClicked, setUniverseClicked] = useState(false);
  // const [mouseX, setMouseX] = useState(0);
  // const [mouseY, setMouseY] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);
  const [bottom, setBottom] = useState(0);

  const handleClickUniverse = () => {
    setUniverseClicked(!isUniverseClicked);
  };

  useEffect(() => {
    if (isUniverseClicked) {
      const handleMouseMove = (e) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        console.log(`x: ${e.clientX} / y: ${e.clientY}`);
        setLeft(e.clientX);
        setTop(e.clientY);
        setBottom(windowHeight - e.clientY);
        setRight(windowWidth - e.clientX);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isUniverseClicked]);

  useEffect(() => {
    console.log({ isUniverseClicked });
  }, [isUniverseClicked]);
  return (
    <>
      <div
        className={`${
          isUniverseClicked
            ? "block absolute w-52 h-auto  z-20"
            : "hidden"
        }`}
        style={{
          top: `${top}px`,
          left: `${left}px`,
        }}
      >
        <img
          className="block w-full h-full"
          alt="Vectary texture"
          src={Universe}
          onClick={handleClickUniverse}
        />
      </div>

      <div className="lg:px-32 px-1">
        <Header />
        <Hero
          handleClickUniverse={handleClickUniverse}
          isUniverseClicked={isUniverseClicked}
        />
        <Content />
        <Footer />
      </div>
    </>
  );
}
