"use client";

import { getMinScreenScale } from "@/plugins/screen.fitter";
import React, { useEffect, cloneElement, useState } from "react";

export default function PageFitter(props: any) {
  const [components, setComponents] = useState(props.children);

  const resizePage = () => {
    let scale = getMinScreenScale();
    if (scale >= 1) {
      return;
    }

    const styleModifier = {
      transform: `scale(${scale})`,
    };

    let children = React.Children.toArray(props.children);
    const modifyChildren = children.map((child) => {
      if (React.isValidElement(child)) {
        const existStyle = child.props.style || {};
        const mergeStyle = { ...existStyle, ...styleModifier };
        //@ts-ignore
        return cloneElement(child, { style: mergeStyle });
      }
      return child;
    });

    setComponents(modifyChildren);
  };

  useEffect(() => {
    resizePage();

    window.addEventListener("resize", resizePage);

    return () => {
      window.removeEventListener("resize", resizePage);
    };
  }, []);

  return <>{components}</>;
}
