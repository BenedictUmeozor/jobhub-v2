import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: PropTypes) => {
  return <div className={`container ${className}`}>{children}</div>;
};
export default Container;
