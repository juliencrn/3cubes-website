interface Step {
  title: string;
  content: string | JSX.Element;
}

interface PropTypes {
  title: string;
  sectionId?: string;
  steps: Step[];
}

const ListSection = ({ title, sectionId, steps }: PropTypes) => (
  <section id={sectionId}>
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-28">
      <h2 className="h2 title mb-4 md:mb-8">{title}</h2>
      {steps.map((step, index) => (
        <StepItem key={index} numero={index + 1} {...step} />
      ))}
    </div>
  </section>
);

const StepItem = ({ title, content }: Step & { numero: number }) => (
  <article className="w-full">
    <div className="rounded-xl p-6 my-4 shadow-2xl bg-emerald-700 text-white">
      <h3 className="h3 title mb-2">{title}</h3>
      <div className="h5 subtitle opacity-[85]">
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  </article>
);

export default ListSection;
