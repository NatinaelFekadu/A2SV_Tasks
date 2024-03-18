import { DUMMY_DATA } from "@/data/dummy_data";
import React from "react";
import { Card } from "@/components/Card";
import Link from "next/link";

const JobsList = () => {
  return (
    <>
      {DUMMY_DATA.map((data) => (
        <Card
          key={data.id}
          id={data.id.toString()}
          title={data.title}
          subTitle={data.subTitle}
          description={data.description}
          imageUrl={data.imageUrl}
        />
      ))}
    </>
  );
};

export default JobsList;
