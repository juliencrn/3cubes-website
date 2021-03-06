import { description, title } from "../../config";
import AnimeOnAppear from "../AnimOnAppear";

function HomeHero() {
  return (
    <header className="bg-base bg-forest-1 min-h-screen flex -mt-20">
      <div className="my-auto container w-full flex flex-col lg:flex-row-reverse gap-36 lg:gap-24">
        <AnimeOnAppear direction="right" className="w-full lg:w-2/5 xl:w-1/3">
          <Cube />
        </AnimeOnAppear>
        <AnimeOnAppear
          direction="left"
          className="text-shadow w-full lg:w-auto"
        >
          <h1 className="h1 title mb-4 text-white">{title}</h1>
          <h2 className="h4 subtitle mb-6 text-gray-200">{description}</h2>
        </AnimeOnAppear>
      </div>
    </header>
  );
}

export default HomeHero;

const Cube = () => (
  <div
    className={`w-48 h-48 cube-anim m-auto`}
    style={{ perspective: 192 * 3 }}
  >
    <div
      className="w-full h-full relative"
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateX(-16deg) rotateY(32deg)`,
      }}
    >
      <div
        id="front"
        className={`absolute w-48 h-48 bg-green-variant opacity-40 border border-gray-500`}
        style={{ transform: `rotateY(0) translateZ(96px)` }}
      />
      <div
        id="back"
        className={`absolute w-48 h-48 bg-green-variant opacity-40 border border-gray-500`}
        style={{ transform: `rotateY(90deg) translateZ(96px)` }}
      />
      <div
        id="right"
        className={`absolute w-48 h-48 bg-green-variant opacity-40 border border-gray-500`}
        style={{ transform: `rotateY(180deg) translateZ(96px)` }}
      />
      <div
        id="left"
        className={`absolute w-48 h-48 bg-green-variant opacity-40 border border-gray-500`}
        style={{ transform: `rotateY(-90deg) translateZ(96px)` }}
      />
      <div
        id="top"
        className={`absolute w-48 h-48 bg-green-variant opacity-40 border border-gray-500`}
        style={{ transform: `rotateX(90deg) translateZ(96px)` }}
      />
      <div
        id="bottom"
        className={`absolute w-48 h-48 bg-green-variant opacity-40 border border-gray-500`}
        style={{ transform: `rotateX(-90deg) translateZ(96px)` }}
      />
    </div>
  </div>
);
