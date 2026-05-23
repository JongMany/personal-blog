import * as runtime from "react/jsx-runtime";

interface Props {
  code: string;
}

export function MDXContent({ code }: Props) {
  const fn = new Function(code);
  const Component = fn(runtime).default as React.ComponentType;
  return <Component />;
}
