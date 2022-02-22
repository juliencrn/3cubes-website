// import Image from "next/image";

// import lynx from "../../assets/white-lynx.png";

interface Step {
  title: string;
  content: string;
}

interface PropTypes {
  steps: Step[];
}

const RoadmapSection = ({ steps }: PropTypes) => (
  <section id="roadmap" className="flex overflow-hidden">
    <div className="bg-blur-1 bg-blur flex-1">
      <div className="max-w-4xl mx-auto px-6 z-10 relative py-16">
        <div className="w-100">
          <h2 className="h2 mb-4">Roadmap</h2>

          <div className="mt-6">
            {steps.map((step, index) => (
              <StepItem key={index} numero={index + 1} {...step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StepItem = ({ title, content, numero }: Step & { numero: number }) => (
  <article className="mb-6 bg-white text-black rounded-xl px-6 py-6 bg-opacity-95 shadow-xl">
    <h4 className="h5  mb-2">
      <span className=" text-emerald-600">{`${numero}. `}</span>
      {title}
    </h4>
    <p>{content}</p>
  </article>
);

export default RoadmapSection;
