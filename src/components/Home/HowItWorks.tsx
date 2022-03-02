import cn from "classnames";
import AnimeOnAppear from "../AnimOnAppear";

interface Step {
  title: string;
  content: string | JSX.Element;
}

interface PropTypes {
  title: string;
  sectionId?: string;
  steps: Step[];
}

const HowItWorks = ({ title, sectionId, steps }: PropTypes) => (
  <section id={sectionId} className="relative">
    <TopWave />
    <div className="bg-emerald-100 my-16 pt-8 md:my-24 lg:my-48">
      <div className="container">
        <AnimeOnAppear>
          <h2 className="h2 title mb-4 md:mb-8">{title}</h2>
        </AnimeOnAppear>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <AnimeOnAppear key={index}>
              <StepItem numero={index + 1} {...step} />
            </AnimeOnAppear>
          ))}
        </div>
      </div>
    </div>
    <BottomWave />
  </section>
);

const StepItem = ({ title, content, numero }: Step & { numero: number }) => (
  <article
    className={cn(
      "w-full md:w-5/6 py-4 md:py-8 lg:py-12",
      numero % 2 == 0 ? "ml-auto" : "mr-auto"
    )}
  >
    <div className=" relative flex flex-wrap">
      <span className="text-white text-shadow font-extrabold h1 title m-auto">
        {numero}.
      </span>
      <div className="w-5/6 rounded-3xl px-4 py-6 md:p-8 bg-white shadow-lg">
        <h3 className="h4 title mb-2">{title}</h3>
        <div className="h6 ">
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      </div>
    </div>
  </article>
);

export default HowItWorks;

const TopWave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="text-emerald-100 absolute left-0 right-0 top-1 -translate-y-full -z-50"
  >
    <path
      fill="currentcolor"
      fillOpacity="1"
      d="M0,128L80,149.3C160,171,320,213,480,245.3C640,277,800,299,960,272C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>
);

const BottomWave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="rotate-180 text-emerald-100 absolute left-0 right-0 bottom-1 translate-y-full"
  >
    <path
      fill="currentcolor"
      fillOpacity="1"
      d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,234.7C672,256,768,224,864,202.7C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
);
