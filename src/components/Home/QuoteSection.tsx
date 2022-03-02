import { FC } from "react";
import AnimeOnAppear from "../AnimOnAppear";

const QuoteSection: FC = ({ children }) => (
  <AnimeOnAppear className="container m-auto py-8">
    <h2 className="h2 subtitle my-12 md:my-24 max-w-3xl md:max-w-5xl text-black">
      {children}
    </h2>
  </AnimeOnAppear>
);

export default QuoteSection;
