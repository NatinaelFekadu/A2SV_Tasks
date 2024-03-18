import Link from "next/link";
import { Button } from "./Button";

interface Props {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
}
export const Card = ({ id, title, subTitle, description, imageUrl }: Props) => {
  return (
    <div className="transform bg-white shadow-md rounded-3xl transition duration-300 hover:scale-105 hover:cursor-pointer gap-7 my-4 py-5 px-6 sm:mx-auto mx-2 sm:w-4/5 xl:w-3/5">
      <Link href={`/JobsList/${id}`}>
        <div className="flex gap-4">
          <img src={imageUrl} alt={title} className="h-20 w-20 rounded-full " />
          <div className="flex flex-col items-start ">
            <h1 className="text-2xl font-epilogue font-bold ">{title}</h1>
            <p className=" text-gray-400 font-epilogue py-2 text-sm">
              {subTitle}
            </p>
          </div>
        </div>
        <p className="py-2 font-epilogue ml-2 md:ml-24">{description}</p>
        <div className="py-2 flex gap-x-1.5 items-center font-epilogue md:ml-24">
          <Button class_name="bg-green-50 text-green-400 text-xs font-medium  px-3.5 py-2 rounded-full">
            In Person
          </Button>
          <span className="text-4xl font-thin text-blue-200">|</span>
          <Button class_name=" text-yellow-500 border border-yellow-500 text-xs font-medium  px-3.5 py-1.5 rounded-full">
            Education
          </Button>
          <Button class_name=" text-blue-800 border border-blue-500 text-xs font-medium  px-5 py-1.5 rounded-full ">
            IT
          </Button>
        </div>
      </Link>
    </div>
  );
};
