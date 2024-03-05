import React from "react";

const sizes = {
  "3xl": "text-4xl font-extrabold leading-[140%]",
  "2xl": "text-[28px] font-extrabold leading-[135%]",
  xl: "text-2xl font-bold leading-[135%]",
  "4xl": "text-[46px] font-extrabold leading-[140%]",
  s: "text-base font-semibold leading-[180%]",
  md: "text-lg font-bold leading-[180%]",
  xs: "text-xs font-semibold leading-[160%]",
  lg: "text-xl font-semibold leading-[140%]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
