import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <Link href={"/JobsList"}>
      <div className="flex-col justify-around  w-3/5 mx-auto">
        <div className="text-center mt-5">
          <p className="font-epilogue ">
            You can see available opportunities here.
          </p>
        </div>
        <div className="rounded-md bg-white text-center shadow-md p-5">
          <Button class_name="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to JobsList
          </Button>
        </div>
      </div>
    </Link>
  );
}
