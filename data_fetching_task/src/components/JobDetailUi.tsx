import { ABOUTDATA } from "@/lib/features/jobs/types";
import React from "react";
import AboutItem from "./AboutItem";
import ResponsibilityItem from "./ResponsibilityItem";
import { Button } from "./Button";

interface Props {
  logoUrl: string;
  title: string;
  orgName: string;
  location: string[];
  description: string;
  responsibilities: string[];
  idealCandidate: string[];
  whenAndWhere: string;
  about: ABOUTDATA[];
  categories: string[];
  requiredSkills: string[];
}

const JobDetailUi = ({
  logoUrl,
  title,
  orgName,
  location,
  description,
  responsibilities,
  idealCandidate,
  whenAndWhere,
  about,
  categories,
  requiredSkills,
}: Props) => {
  return (
    <>
      <div className="flex-row md:flex justify-between items-center bg-white shadow-md rounded-3xl p-3 md:p-5 md:m-10">
        <div className="flex gap-4 ">
          <img src={logoUrl} alt={title} className="h-20 w-20 rounded-full " />
          <div className="flex flex-col items-start ">
            <h1 className="text-3xl font-poppins font-black ">{title}</h1>
            <p className=" text-gray-400 font-epilogue py-2 text-md">
              <span>{orgName}. </span>
              {location.map((loc: string, index: number) => (
                <span key={index}>{loc}, </span>
              ))}
            </p>
          </div>
        </div>
        <div className="flex gap-10 items-center mr-4 divide-x divide-gray-300">
          <div className="hover:cursor-pointer">
            <img src="/assets/share.svg" alt="" />
          </div>
          <div>
            <Button class_name="bg-blue-900 ml-10 text-white font-bold px-10 py-2 rounded-full">
              Apply
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:gap-20 mx-10 md:my-10 font-epilogue">
        <div className="w-full md:w-2/3 md:my-11">
          <h1 className="text-2xl font-black font-poppins my-4">Description</h1>
          <p>{description}</p>
          <h1 className="text-2xl font-black font-poppins mt-8 mb-4">
            Responsibilities
          </h1>
          <ul className="list-inside list-disc ml-1">
            {responsibilities.map(
              (item: string) =>
                item && <ResponsibilityItem key={item} description={item} />
            )}
          </ul>
          <h1 className="text-2xl font-black font-poppins mt-8 mb-4">
            Ideal Candidate we want
          </h1>
          <ul className="list-disc ml-8">
            {idealCandidate.map(
              (item: string) => item && <li className="mt-3">{item}</li>
            )}
          </ul>
          <h1 className="text-2xl font-black font-poppins mt-8">
            When & Where
          </h1>
          <div className="flex gap-3 items-center mt-4">
            <img src="/assets/location.svg" alt="" />
            <p>{whenAndWhere}</p>
          </div>
        </div>
        <div className="divide-y divide-gray-300 w-full md:w-1/4">
          <div className="pt-4 ">
            <h1 className="text-2xl font-black font-poppins">About</h1>
            {about.map(
              (item) =>
                item.description && (
                  <AboutItem
                    key={item.id}
                    imagePath={item.imagePath}
                    title={item.title}
                    description={item.description}
                  />
                )
            )}
          </div>
          <div className="pt-6 mt-4">
            <h1 className="text-2xl font-black font-poppins">Categories</h1>
            <div className="py-4 flex flex-wrap justify-around items-center font-epilogue">
              {categories.map((category: string, idx: number) => (
                <p
                  className={`text-xs max-w-32 font-medium mt-2 px-3 py-4 rounded-full text-center ${
                    idx % 2 === 0
                      ? "bg-yellow-50 text-yellow-400"
                      : "bg-green-50 text-green-500"
                  }`}
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-4">
            <h1 className="text-2xl font-black font-poppins">
              Required Skills
            </h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {requiredSkills.map((skill: string) => (
                <span className="bg-gray-100 font-normal text-sm mb-2  me-2 px-2.5 py-1.5  dark:bg-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailUi;
