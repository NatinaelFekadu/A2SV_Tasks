interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
export const Card = ({ title, subtitle, description, image }: Props) => {
  return (
    <div className="transform flex bg-white cursor-pointer shadow-md rounded-3xl transition duration-300 hover:scale-105 gap-7 my-4 py-5 px-6 sm:mx-auto mx-2 sm:w-4/5 md:w-3/5">
      <img src={image} alt={title} className="h-20 w-20 rounded-full" />
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-epilogue font-bold ">{title}</h1>
        <p className=" text-gray-400 font-epilogue py-2 text-sm">{subtitle}</p>
        <p className="py-2 font-epilogue ">{description}</p>
        <div className="py-2 flex gap-x-1.5 items-center font-epilogue">
          <span className="bg-green-50 text-green-400 text-xs font-medium  px-3.5 py-2 rounded-full">
            In Person
          </span>
          <span className="text-4xl font-thin text-blue-200">|</span>
          <span className=" text-yellow-500 border border-yellow-500 text-xs font-medium  px-3.5 py-1.5 rounded-full">
            Education
          </span>
          <span className=" text-blue-800 border border-blue-500 text-xs font-medium  px-5 py-1.5 rounded-full ">
            IT
          </span>
        </div>
      </div>
    </div>
  );
};
