import React, { useState } from "react";

interface ImageOrTextProps {
  src: string;
  alt: string;
  text: string;
  className?: string;
}

export default function ImageOrText({ src, alt, text, className }: ImageOrTextProps) {
  const [error, setError] = useState(false);
  if (error) {
    return <span className="font-gothic font-bold text-[50px] text-brand-blue-light leading-[50px] transition-transform duration-500 hover:scale-120">{text}</span>;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}