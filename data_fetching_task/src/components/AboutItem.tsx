import React from "react";

interface Props {
  imagePath: string;
  title: string;
  description: string;
}
const AboutItem = ({ imagePath, title, description }: Props) => {
  return (
    <div className="flex gap-3 mt-6">
      <img src={imagePath} alt={title} />
      <div className="flex flex-col gap-1">
        <p>{title}</p>
        <p className="font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default AboutItem;
