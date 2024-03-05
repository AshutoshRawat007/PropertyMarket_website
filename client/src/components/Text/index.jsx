import React from "react";

const sizes = {
  xs: "text-lg font-normal leading-[180%]",
  s: "text-xl font-normal leading-[180%]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-orange-A700 font-markoone ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
