import { description, title } from "../../config";

function HomeHero() {
  return (
    <header className="bg-base bg-forest-3-reversed">
      <div className="min-h-screen -mt-20 container flex">
        <div className="my-auto w-full">
          <h1 className="h1 title mb-4 text-white">{title}</h1>
          <h2 className="h4 subtitle mb-6 text-gray-200">{description}</h2>
        </div>
      </div>
    </header>
  );
}

export default HomeHero;
