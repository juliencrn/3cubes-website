import type { NextPage } from "next";

import { title } from "../config";
import HomeHero from "../components/Home/HomeHero";
import RewardSection from "../components/Home/RewardSection";
import FaqSection from "../components/Home/FaqSection";
import QuoteSection from "../components/Home/QuoteSection";
import ListSection from "../components/ListSection";
import PartnersSection from "../components/Home/PatnersSection";
import HowItWorks from "../components/Home/HowItWorks";
import Separator from "../components/Separator";
import MarketSection from "../components/Home/MarketSection";

const Home: NextPage = () => {
  return (
    <>
      <HomeHero />

      <Separator />

      <QuoteSection>
        {title} aims to reduce global greenhouse emissions by creating and
        investing in sustainable reforestation programs.
      </QuoteSection>

      <HowItWorks
        title="Mechanism."
        sectionId="how-it-works"
        steps={[
          {
            title: "Own a tree",
            content: "You can buy an NFT that represents a tree quantity.",
          },
          {
            title: "Seed in planted",
            content: "The trees are planted by our partners, world wide.",
          },
          {
            title: "Collect Token Carbon Credit",
            content:
              "CO2 absorbed by trees will be measured and verified to become exchangeable Carbon Credit.",
          },
          {
            title: "Reward nature holder",
            content:
              "Carbons credit are retired from the market by locked-in on the blockchain to be redistributed or can be sold on our website.",
          },
        ]}
      />

      <QuoteSection>
        Use the <span className="text-solana">Solana</span> blockchain
        technology to keep track and share with all the stakeholders the current
        view of the project at every moment.
      </QuoteSection>

      <RewardSection>
        <p>
          Profits generated from the C02 absorption will be distributed to the
          NFT holders in our coin. The amount eligible will be calculated* based
          on the amount of CO2 a tree has absorbed a year.
        </p>
        <p className="mt-4 lg:mt-8 text-sm">
          *Calculated proportionally based on the tree growth curve (its age)
          and the holden quantity.
        </p>
      </RewardSection>

      <MarketSection />

      <ListSection
        title="Roadmap"
        sectionId="roadmap"
        steps={[
          {
            title: "Q2 - 2022",
            content: (
              <ul className="ml-6 list-disc">
                <li>Launch the seeds NFT collection discounted price</li>
                <li>Start plantation</li>
                <li>Start verification process</li>
              </ul>
            ),
          },
          {
            title: "Q3 - 2022",
            content: (
              <ul className="ml-6 list-disc">
                <li>Launch the tree NFT collectible non-limited supply</li>
                <li>Verify and plant continuously</li>
              </ul>
            ),
          },
          {
            title: "Q4 - 2022",
            content: (
              <ul className="ml-6 list-disc">
                <li>Expand to new countries and more partnerships</li>
                <li>Development of a bridge to tokenize carbon credits</li>
              </ul>
            ),
          },
          {
            title: "S1 - 2023",
            content: (
              <ul className="ml-6 list-disc">
                <li>Creation of our TCO2 backed token</li>
                <li>Creation of our utility token for rewards</li>
              </ul>
            ),
          },
          {
            title: "S2 - 2023",
            content: (
              <ul className="ml-6 list-disc">
                <li>Launch a staking service to increase yield</li>
                <li>Launch an algae NFT non-limited supply</li>
              </ul>
            ),
          },
        ]}
      />

      <QuoteSection>
        We believe in sustainable value creation by being the most transparent
        as possible. Our current measures are partnerships with certified
        organizations to audit and verify our work.
      </QuoteSection>

      <PartnersSection />

      <FaqSection
        questions={[
          {
            question: "What is the mint price?",
            response: (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                officiis et, ipsam nulla nisi atque quam excepturi fugit
                provident. Non eligendi voluptatibus odio inventore, nobis ipsa
                iusto earum sed adipisci?
              </p>
            ),
          },
          {
            question: "Where do we plant?",
            response: (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                officiis et, ipsam nulla nisi atque quam excepturi fugit
                provident. Non eligendi voluptatibus odio inventore, nobis ipsa
                iusto earum sed adipisci?
              </p>
            ),
          },
          {
            question: "How is verified the CO2 absorption?",
            response: (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                officiis et, ipsam nulla nisi atque quam excepturi fugit
                provident. Non eligendi voluptatibus odio inventore, nobis ipsa
                iusto earum sed adipisci?
              </p>
            ),
          },
        ]}
      />
    </>
  );
};

export default Home;
