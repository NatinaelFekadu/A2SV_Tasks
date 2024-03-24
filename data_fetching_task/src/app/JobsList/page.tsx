"use client";
import React from "react";
import { Card } from "@/components/Card";
import { useGetJobsQuery } from "@/lib/features/api/apiSlice";
import { Job } from "@/lib/features/jobs/types";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";

const JobsList = () => {
  const { data, error, isLoading } = useGetJobsQuery("opportunities/search");

  if (data) {
    console.log(data);
  }
  const jobsList = [];

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (!data) {
    return <div>No data available</div>;
  }
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
      {data.data.map((data: Job) => (
        <Card
          key={data.id}
          id={data.id}
          title={data.title}
          location={data.location}
          orgName={data.orgName}
          description={data.description}
          imageUrl={data.logoUrl}
        />
      ))}
    </>
  );
};

export default JobsList;
