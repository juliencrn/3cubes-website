import Image from "next/image";
import { FC } from "react";
import chart from "../../assets/charts/yield-trees.jpeg";

const RewardSection: FC = ({ children }) => (
  <section id="rewards" className="py-8 my-12 md:my-24">
    <div className="container my-4">
      <div className="flex flex-wrap pt-16 bg-green-variant rounded-3xl">
        <div className="p-4 md:p-8 sm:p-12 xl:p-16 w-full md:w-1/2 flex flex-col justify-center py-6">
          <h2 className="h2 mb-4 title">Rewards</h2>
          <div className="h5 mb-4 subtitle gap-2 grid">{children}</div>
        </div>

        <div className="md:pl-8 w-full md:w-1/2 mt-auto pt-12 overflow-hidden">
          <div className="shadow-2xl flex relative">
            <Image
              src={chart}
              alt={"chart"}
              className="md:rounded-tl-3xl w-full "
              placeholder="blur"
            />
            <code className="text-right text-sm text-mono absolute -top-8 right-4 md:right-8">
              Annual growth of a tree over time.
            </code>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RewardSection;
