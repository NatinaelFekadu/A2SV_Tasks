import AboutItem from "@/components/AboutItem";
import { Button } from "@/components/Button";
import ResponsibilityItem from "@/components/ResponsibilityItem";
import { getJob } from "@/data/dummy_data";
import { ABOUT_DATA } from "@/data/dummy_data";
import { RESPONSIBILITIES_DATA } from "@/data/dummy_data";

interface Props {
  params: {
    JobId: string;
  };
}

const JobDetail = ({ params }: Props) => {
  const { JobId } = params;
  const job = getJob(parseInt(JobId));
  return (
    <>
      <div className="flex-row md:flex justify-between items-center bg-white shadow-md rounded-3xl p-2 md:p-5 md:m-10">
        <div className="flex gap-4 ">
          <img
            src={job!.imageUrl}
            alt={job!.title}
            className="h-20 w-20 rounded-full "
          />
          <div className="flex flex-col items-start ">
            <h1 className="text-3xl font-poppins font-black ">{job!.title}</h1>
            <p className=" text-gray-400 font-epilogue py-2 text-md">
              {job!.subTitle}
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
          <p>{job!.description}</p>
          <h1 className="text-2xl font-black font-poppins mt-8 mb-4">
            Responsibilities
          </h1>
          <ul className="list-inside list-disc ml-1">
            {RESPONSIBILITIES_DATA.map((item) => (
              <ResponsibilityItem
                key={item.id}
                description={item.description}
              />
            ))}
          </ul>
          <h1 className="text-2xl font-black font-poppins mt-8 mb-4">
            Ideal Candidate we want
          </h1>
          <ul className="list-disc ml-8">
            <li className="font-bold">
              Young(18-24 year old) Female social media manager
            </li>
            <li className="mt-3">
              <b>Passionate & Reliable:</b> Genuine interest in our mission and
              a strong desire to make a positive impact, responsible, and
              committed to fulfilling volunteer commitments.
            </li>
            <li className="mt-3">
              <b>Adaptable, Team Player & Strong Communication Skills:</b> Able
              to work effectively in diverse teams; and contributes
              positively.Flexible and open to embracing new challenges and
              shifting priorities; Clear verbal and written communication,
              active listening, and constructive feedback.
            </li>
            <li className="mt-3">
              <b>Respectful:</b> Embraces diversity, inclusive, and treats
              others with respect. Abides with all our rules and regulations
            </li>
          </ul>
          <h1 className="text-2xl font-black font-poppins mt-8">
            When & Where
          </h1>
          <div className="flex gap-3 items-center mt-4">
            <img src="/assets/location.svg" alt="" />
            <p>
              The onboading event for this event will take place in Jan 18th,
              2023 in AAU Auditorium
            </p>
          </div>
        </div>
        <div className="divide-y divide-gray-300 w-full md:w-1/4">
          <div className="pt-4 ">
            <h1 className="text-2xl font-black font-poppins">About</h1>
            {ABOUT_DATA.map((item) => (
              <AboutItem
                key={item.title}
                imagePath={item.imagePath}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="pt-6 mt-4">
            <h1 className="text-2xl font-black font-poppins">Categories</h1>
            <div className="py-4 flex gap-x-1.5 items-center font-epilogue">
              <Button class_name="bg-yellow-50 text-yellow-400 text-xs font-medium  px-3.5 py-2 rounded-full">
                Marketing
              </Button>
              <Button class_name=" text-green-500 bg-green-50 text-xs font-medium  px-3.5 py-1.5 rounded-full">
                Design
              </Button>
            </div>
          </div>
          <div className="pt-6 mt-4">
            <h1 className="text-2xl font-black font-poppins">
              Required Skills
            </h1>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-100 font-normal text-sm mb-2  me-2 px-2.5 py-1.5  dark:bg-gray-700 dark:text-gray-300">
                Social Media Marketing
              </span>
              <span className="bg-gray-100 font-normal text-sm mb-2  me-2 px-2.5 py-1.5  dark:bg-gray-700 dark:text-gray-300">
                English
              </span>
              <span className="bg-gray-100 font-normal text-sm  me-2 px-2.5 py-0.5  dark:bg-gray-700 dark:text-gray-300">
                Copy Writing
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
