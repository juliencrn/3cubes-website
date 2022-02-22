import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "./Icons";
import cn from "classnames";

interface PropTypes {
  title: string;
  content: JSX.Element;
  open?: boolean;
}

const Collapse = ({ open, title, content }: PropTypes) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen && !!ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <article className="my-6 md:my-12">
      <h3
        onClick={toggleOpen}
        className="h3 cursor-pointer  mb-2 flex justify-between"
      >
        {title}
        <span
          className={cn(
            isOpen ? "rotate-180" : "",
            "transition-transform duration-200"
          )}
        >
          <ChevronDownIcon />
        </span>
      </h3>
      <div
        className="overflow-hidden h5"
        style={{
          transition: "height 0.2s ease-in-out",
          height,
        }}
      >
        <div ref={ref}>{isOpen && <div>{content}</div>}</div>
      </div>
    </article>
  );
};

export default Collapse;
