import { DUMMY_DATA } from "@/data/dummy_data";
import React from "react";
import { Card } from "@/components/Card";
import Link from "next/link";

const JobsList = () => {
  return (
    <>
      <div className="flex justify-between w-3/5 mx-auto my-10">
        <div>
          <h1 className="text-3xl font-poppins font-black">Opportunties</h1>
          <p className="text-gray-500">showing 12 results</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-500">Sort by:</p>
          <select
            name="sort"
            id="sort"
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="newest">Most relevant</option>
            <option value="oldest">Newest</option>
            <option value="salary">Oldest</option>
          </select>
        </div>
      </div>
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
