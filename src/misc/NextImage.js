import Image from "next/image";

// type Props = {
//   src: string
//   className?: string
//   alt?: string
// }

export const NextImage = () => {
  return (
    <Image
      css={className}
      alt={alt || ""}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      unoptimized={true}
    />
  );
};
