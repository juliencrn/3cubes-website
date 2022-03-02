import AnimeOnAppear from "../AnimOnAppear";
import Separator from "../Separator";

function Footer() {
  return (
    <footer className="bg-base bg-destroyed-forest">
      <AnimeOnAppear className="container py-32 md:py-56">
        <p className="h2 title text-white text-center mb-12 text-shadow">
          {`It's time to plant 🌳`}
        </p>
      </AnimeOnAppear>
      <Separator />
    </footer>
  );
}

export default Footer;
