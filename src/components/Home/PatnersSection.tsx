import Image from "next/image";
import AnimeOnAppear from "../AnimOnAppear";

interface PartnerProps {
  name: string;
  href: string;
  src: StaticImageData;
}

export default function PartnersSection() {
  return (
    <section className="">
      <div className="container max-w-5xl sm:my-12 md:my-16">
        <div className="flex flex-wrap">
          <Partner
            src={require("../../assets/partners/carbon-tx.png")}
            name="Carbon Trade Exchange"
            href="#"
          />
          <Partner
            src={require("../../assets/partners/icr.png")}
            name="International Carbon Registry"
            href="#"
          />
          <Partner
            src={require("../../assets/partners/verra.png")}
            name="Verra"
            href="#"
          />
          <Partner
            src={require("../../assets/partners/veritree.png")}
            name="Veritree"
            href="#"
          />
          <Partner
            src={require("../../assets/partners/gone-west.png")}
            name="Gone West"
            href="#"
          />
          <Partner
            src={require("../../assets/partners/cgn.png")}
            name="CGN"
            href="#"
          />
        </div>
      </div>
    </section>
  );
}

function Partner(props: PartnerProps) {
  return (
    <div className="w-1/2 sm:w-1/3 p-4 xl:px-8 flex">
      <AnimeOnAppear className="my-auto">
        <span>
          <Image
            src={props.src}
            alt={props.name}
            className="border-2 border-green-300"
          />
        </span>
      </AnimeOnAppear>
    </div>
  );
}
