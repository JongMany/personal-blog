import * as runtime from "react/jsx-runtime";
import NextImage from "next/image";

const MdxImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  if (!props.src || typeof props.src !== "string") return null;
  return (
    <NextImage
      src={props.src}
      alt={props.alt ?? ""}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
};

const mdxComponents = {
  img: MdxImage,
};

interface Props {
  code: string;
}

export function MDXContent({ code }: Props) {
  const fn = new Function(code);
  const Component = fn(runtime).default as React.ComponentType<{
    components?: Record<string, unknown>;
  }>;
  return <Component components={mdxComponents} />;
}
