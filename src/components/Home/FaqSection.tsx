import AnimeOnAppear from "../AnimOnAppear";
import Collapse from "../Collaspe";

interface PropTypes {
  questions: {
    question: string;
    response: JSX.Element;
  }[];
}

const FaqSection = ({ questions }: PropTypes) => (
  <section id="faq" className="my-12 md:my-32">
    <AnimeOnAppear className="max-w-2xl mx-auto sm:my-12 md:my-16 px-6">
      <h2 className="h2 title mb-12 md:mb-20 text-center">FAQ</h2>
      <div>
        {questions.map(({ question, response }, index) => (
          <Collapse key={index} title={question} content={response} />
        ))}
      </div>
    </AnimeOnAppear>
  </section>
);

export default FaqSection;
