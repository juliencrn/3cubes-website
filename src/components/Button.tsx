import cn from "classnames";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";

export interface StyleProps {
  variant: "primary" | "secondary";
  disabled?: boolean;
}

export const getClassnames = (props: StyleProps) => {
  const disabled = !!props?.disabled;
  let classNames = cn(
    "w-full sm:w-auto flex-none",
    "uppercase  leading-6 text-center",
    "hover:text-gray-900",
    "rounded-full",
    "space-x-2 sm:space-x-4",
    "transition-colors duration-200",
    "focus:outline-none",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    "pt-4 pb-3 px-10"
  );

  if (disabled) {
    classNames = cn(classNames, "bg-gray-500  hover:bg-gray-500");
  } else {
    if (props.variant === "primary") {
      classNames = cn(
        classNames,
        "bg-emerald-600 hover:bg-emerald-500 text-white hover:text-white"
      );
    } else {
      classNames = cn(
        classNames,
        "bg-black hover:bg-gray-900 text-yellow-300 hover:text-yellow-300"
      );
    }
  }

  return classNames;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & StyleProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      className={cn(props.className, getClassnames(props))}
    />
  );
});

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & StyleProps;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function Button(props, ref) {
    return (
      <a
        ref={ref}
        {...props}
        className={cn(props.className, getClassnames(props))}
      />
    );
  }
);

export default Button;
