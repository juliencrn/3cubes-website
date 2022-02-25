import { FC } from "react";

const QuoteSection: FC = ({ children }) => (
  <div className="py-8">
    <div className="container">
      <div className="w-full m-auto">
        <div className="relative">
          <h2 className="h2 subtitle my-12 md:my-24 max-w-3xl md:max-w-5xl text-black">
            {children}
          </h2>
        </div>
      </div>
    </div>
  </div>
);

export default QuoteSection;
