import React from "react";

interface Props {
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export const Layout = (props: Props) => {
  return <div className="background">{props.children}</div>;
};
