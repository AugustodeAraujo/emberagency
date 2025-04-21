import { HTMLProps } from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <div
      className={`mx-auto container max-w-[1280px] px-4 lg:px-0  ${props.className}`}
    >
      {props.children}
    </div>
  );
}
