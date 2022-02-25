import Link from "next/link";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import Headroom from "react-headroom";
import {
  useEventListener,
  useMediaQuery,
  useOnClickOutside,
} from "usehooks-ts";
import cn from "classnames";

import { mediaQueries, title } from "../../config";
import { BurgerIcon } from "../Icons";
import Image from "next/image";

interface AnchorProps {
  name: string;
}

function AnchorLink({ name }: AnchorProps) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchor(document.getElementById(name));
  }, [name]);

  const handleClick = (event: SyntheticEvent<HTMLAnchorElement>) => {
    if (!anchor) return;
    event.preventDefault();
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <li className="mr-4 my-auto py-2 font-mono">
      <a onClick={handleClick} href={`#${name}`}>
        {name}
      </a>
    </li>
  );
}

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery(`(min-width: ${mediaQueries.md})`);
  const showMobileMenu = !isDesktop && open;

  useOnClickOutside(menuRef, () => setOpen(false));
  useEventListener("scroll", () => {
    if (open) {
      setOpen(false);
    }
  });

  useEffect(() => {
    if (open && !!ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [open]);

  const toggle = () => setOpen((prev) => !prev);

  const menuClasses = " text-sm sm:text-base font-medium";

  return (
    <Headroom className="z-50">
      <div
        className={`headroom-bg relative  ${
          showMobileMenu ? "bg-white" : "overflow-hidden bg-transparent"
        }`}
      >
        <div
          ref={menuRef}
          className={`${
            showMobileMenu ? "flex-wrap" : ""
          } container flex justify-between relative`}
        >
          <div className="h-20 flex">
            <Link href="/">
              <>
                <span className="aspect-square w-12 h-12 relative overflow-hidden my-auto">
                  <Image src="/apple-touch-icon.png" layout="fill" alt="tree" />
                </span>
                <a className="h5 title my-auto pl-1 font-mono">{title}</a>
              </>
            </Link>
          </div>

          <button type="button" className="block md:hidden" onClick={toggle}>
            <BurgerIcon />
          </button>

          <ul className={cn(menuClasses, "hidden md:flex")}>
            <Menu />
          </ul>

          <div
            className="overflow-hidden absolute top-20 left-0 w-full shadow-lg"
            style={{
              transition: "height 0.2s ease-in-out",
              height,
            }}
          >
            <div ref={ref}>
              {showMobileMenu && (
                <ul className={cn(menuClasses, "px-6 py-2  bg-white")}>
                  <Menu />
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Header;

const Menu = () => (
  <>
    {["how-it-works", "rewards", "roadmap", "faq"].map((name) => (
      <AnchorLink key={name} name={name} />
    ))}
  </>
);
