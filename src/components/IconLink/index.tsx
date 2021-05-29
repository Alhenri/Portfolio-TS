import React, { useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";

interface IconLinkProps {
  icon: string;
  url: string;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, url }) => {
  const [style, setStyle] = useState<React.CSSProperties>({
    margin: "0 10px",
    cursor: "pointer",
    fontSize: 16,
  });
  const [showLabel, setShowLabel] = useState<boolean>(false);

  const eventsListeners = {
    onMouseOver: () => {
      setShowLabel(true);
      setStyle({ ...style, fontSize: 20 });
    },
    onMouseOut: () => {
      setShowLabel(false);
      setStyle({ ...style, fontSize: 16 });
    },
    onClick: () => window.open(url),
  };

  switch (icon) {
    case "github":
      return (
        <span {...eventsListeners} style={{ cursor: "pointer" }}>
          {showLabel && "Veja o repositório!"}
          <VscGithubAlt style={style} />
        </span>
      );
    case "external_link":
    default:
      return (
        <span {...eventsListeners} style={{ cursor: "pointer" }}>
          {showLabel && "Visite o site!"}
          <RiExternalLinkLine style={style} />
        </span>
      );
  }
};

export default IconLink;
