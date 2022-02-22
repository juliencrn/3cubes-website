import Image from "next/image";
import { FC } from "react";
import chart from "../../assets/yield-trees.jpeg";

const RewardSection: FC = ({ children }) => (
  <section id="rewards" className="bg-emerald-700 py-8 text-white ">
    <div className="max-w-5xl mx-auto my-12 md:my-24 px-6 flex flex-col md:flex-row md:justify-between">
      <div className="w-full md:w-2/5 flex flex-col justify-center py-6 md:mr-6">
        <h2 className="h2 mb-4 title">Rewards</h2>
        <div className="h5 mb-4 subtitle gap-2 grid opacity-[85]">
          {children}
        </div>
      </div>

      <div className="w-full md:w-3/5 my-auto">
        <Image
          src={chart}
          alt={"chart"}
          className="rounded-2xl w-full"
          placeholder="blur"
        />
        <p className="text-center">Annual growth of a tree over time.</p>
      </div>
    </div>
  </section>
);

export default RewardSection;
