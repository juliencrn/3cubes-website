import { FC, useEffect } from "react";
import { useScript } from "usehooks-ts";

const MarketSection: FC = ({}) => (
  <section id="market" className="py-8  my-12 md:my-24">
    <div className="container my-4">
      <div className="flex flex-wrap pt-16 bg-green-variant rounded-3xl">
        <div className="p-4 md:p-8 sm:p-12 xl:p-16 w-full md:w-1/2 flex flex-col justify-center py-6">
          <h2 className="h2 mb-4 title">Market outlook</h2>
          <div className="h5 mb-4 subtitle gap-2 grid">
            <p>
              The Voluntary Carbon Credit size is valued at 1$ billion. Volume
              of VC has grown over X5 in the last 5 years.
            </p>
          </div>
        </div>

        <div className="md:pl-8 w-full md:w-1/2 mt-auto pt-12 overflow-hidden">
          <div className="shadow-2xl flex relative">
            <div className="md:rounded-tl-3xl w-full py-8 px-6 bg-white">
              <Chart />
            </div>
            <code className="text-right text-sm text-mono absolute -top-8 right-4 md:right-8">
              European Union ETS futures contract.
            </code>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MarketSection;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const TradingView: any;

const Chart = () => {
  const status = useScript("https://s3.tradingview.com/tv.js");

  useEffect(() => {
    if (status !== "ready") {
      return;
    }

    new TradingView.widget({
      container_id: "watchlist",
      autosize: true,
      symbol: "ICEEUR:ECF1!",
      timezone: "Etc/UTC",
      theme: "light",
      style: "2",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: true,
      range: "60M",
      save_image: false,
    });
  }, [status]);

  return <div id="watchlist" className="aspect-[4/3] w-full" />;
};
