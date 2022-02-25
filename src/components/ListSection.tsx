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
  <section id={sectionId} className="bg-green-variant-circle">
    <div className="container max-w-3xl py-16 md:py-28 ">
      <h2 className="h2 title mb-4 md:mb-8">{title}</h2>
      {steps.map((step, index) => (
        <StepItem key={index} numero={index + 1} {...step} />
      ))}
    </div>
  </section>
);

const StepItem = ({ title, content }: Step & { numero: number }) => (
  <article className="w-full">
    <div className="rounded-3xl px-4 py-6 md:p-8 my-4 md:my-8 shadow-lg bg-white">
      <h3 className="h4 title mb-2">{title}</h3>
      <div className="h6">
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  </article>
);

export default ListSection;
