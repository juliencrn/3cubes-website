import { description, title } from "../../config";

function HomeHero() {
  return (
    <header className="bg-blur bg-forest-2">
      <div className="min-h-screen -mt-20 px-6 max-w-5xl mx-auto flex">
        <div className="m-auto w-full text-white text-shadow">
          <h1 className="h1 title mb-4">{title}</h1>
          <h2 className="h3 subtitle mb-6 opacity-[85]">{description}</h2>
        </div>
      </div>
    </header>
  );
}

export default HomeHero;
