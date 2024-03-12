import React from "react";

const Img = ({ className, src, alt, ...restProps }) => {

  src = src && typeof src === 'string'
    ? (src.startsWith('https://') || src.startsWith('images/') || src.startsWith('/images/'))
      ? src
      : 'http://localhost:4000/uploads/' + src
    : null;
  return <img className={className} src={src} alt={alt} {...restProps} loading={"lazy"} />;
};
export { Img };
