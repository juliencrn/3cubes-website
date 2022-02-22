// import Image from "next/image";

// import lynx from "../../assets/white-lynx.png";

interface Step {
  title: string;
  content: string;
}

interface PropTypes {
  steps: Step[];
}

const HowItWorksSection = ({ steps }: PropTypes) => (
  <section id="how-it-works">
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-28">
      <div className="w-100">
        <h2 className="h2 title mb-4 md:mb-8">How it works</h2>

        <div className="">
          {steps.map((step, index) => (
            <StepItem key={index} numero={index + 1} {...step} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const StepItem = ({ title, content, numero }: Step & { numero: number }) => (
  <article className="w-full">
    <div className="rounded-xl p-6 my-4 shadow-2xl bg-emerald-700 text-white">
      <h3 className="h3 title mb-2">{`${numero}. ${title}`}</h3>
      <p className="h5 subtitle opacity-[85]">{content}</p>
    </div>
  </article>
);

export default HowItWorksSection;
