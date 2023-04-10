import CarouselInfinite from "@/components/Carousel/Carousel";
import Team from "@/components/Team/Team";

const Home = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="container mx-auto pt-[8%] pb-[5%]">
          <h1 className="text-5xl leading-tight font-light">
            #1 outsource company <br /> in Uzbekistan
          </h1>
          <a
            className="text-blue-600 border-blue-600 border-b"
            target="_blank"
            href="https://new.birdarcha.uz/document/52dbcdb1-9cf6-4aa9-a3f0-8509aec31a5a"
          >
            Registered documentation
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <h4 className="font-semibold text-xl">Companies</h4>
        <p className="text-sm text-gray-500">we have worked with</p>
      </div>
      <CarouselInfinite />
      <Team />
    </>
  );
};

export default Home;
