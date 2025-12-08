import React, { useState } from "react";

interface ImageOrTextProps {
  src: string;
  alt: string;
  text: string;
  className?: string;
}

export default function ImageOrText({ src, alt, text, className }: ImageOrTextProps) {
  if (text === 'M-2200') {
    return <span className="font-gothic font-bold text-[22px] text-brand-blue-light leading-[20px] transition-transform duration-500 hover:scale-120">{text}</span>;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
}