import type { NextPage } from "next";

import HomeHero from "../components/Home/HomeHero";
import RewardSection from "../components/Home/RewardSection";
import FaqSection from "../components/Home/FaqSection";
import QuoteSection from "../components/Home/QuoteSection";
import ListSection from "../components/ListSection";

const Home: NextPage = () => {
  return (
    <>
      <HomeHero />
      <QuoteSection />
      <ListSection
        title="How it works"
        sectionId="how-it-works"
        steps={[
          {
            title: "1. Own a tree",
            content: "You can buy an NFT that represents some tree quantity.",
          },
          {
            title: "2. Seed in planted",
            content: "The trees are planted by our partners, world wide.",
          },
          {
            title: "3. Collect Carbon Credits",
            content:
              "CO2 absorbed by trees will be measured and verified to become exchangeable Carbon Credit.",
          },
          {
            title: "4. Reward nature holder",
            content:
              "Carbons credit are retired from the market by locked-in on the blockchain to be redistributed.",
          },
        ]}
      />

      <RewardSection>
        <p>Rewards are directly correlated on the growth curve.</p>
        <p>
          On a period of 5 years, the return on investment can pay off. With a
          current market price of 10$ per carbon credit.
        </p>
      </RewardSection>

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
            title: "2023",
            content: (
              <ul className="ml-6 list-disc">
                <li>Launch an algae NFT non-limited supply</li>
                <li>Creation of our TCO2 backed token</li>
                <li>Creation of our utility token for rewards</li>
              </ul>
            ),
          },
          {
            title: "2024",
            content: (
              <ul className="ml-6 list-disc">
                <li>Launch a staking service to increase yield</li>
              </ul>
            ),
          },
        ]}
      />

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
        ]}
      />
    </>
  );
};

export default Home;
