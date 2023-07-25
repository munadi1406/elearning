import Hero from "../components/landingPage/Hero";
import Footer from "../layout/landingPage/Footer";
import Header from "../layout/landingPage/Header";
import Content from "../components/landingPage/Content";


export default function LandingPage() {
  

  return (
    <>
      <div className="lg:px-32 px-1">
        <Header />
        <Hero/>
        <Content />
        <Footer />
      </div>
    </>
  );
}
