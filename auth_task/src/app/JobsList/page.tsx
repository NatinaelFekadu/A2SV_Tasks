"use client";
import React, { useEffect } from "react";
import { Card } from "@/components/Card";
import { useGetJobsQuery } from "@/lib/features/api/apiSlice";
import { Job } from "@/lib/features/jobs/types";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "../../lib/store";
import { setJobs } from "@/lib/features/jobs/jobsSlice";

const JobsList = () => {
  const { data: session, status } = useSession();
  const { data, error, isLoading } = useGetJobsQuery("opportunities/search");
  const dispatch = useAppDispatch();
  const jobsState = useAppSelector((state: RootState) => state.jobs);
  const jobsList = jobsState.jobs;
  const dataFetched = jobsState.dataFetched;
  const [filteredJobs, setFilteredJobs] = React.useState<Job[]>(jobsList);
  const router = useRouter();
  const handleLogout = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/auth/login" });
    router.replace(data.url);
  };
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filtered = jobsList.filter((job) =>
      job.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredJobs(filtered);
  };
  if (status === "authenticated") {
    console.log(session);
  }

  useEffect(() => {
    if (data && !dataFetched) {
      dispatch(setJobs(data.data));
    }
  }, [data]);

  useEffect(() => {
    setFilteredJobs(jobsList);
  }, [jobsList]);

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
      <input
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/5 mt-2 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        placeholder="Search for Jobs..."
        onChange={handleFilter}
      />
      <div className="flex justify-between w-4/5 mx-auto my-10">
        <div>
          <h1 className="text-3xl font-poppins font-black">Opportunties</h1>
          <p className="text-gray-500">showing {data.count} results</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-500">Sort by:</p>

          <div className="flex justify-around items-center gap-20">
            <select
              name="sort"
              id="sort"
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="newest">Most relevant</option>
              <option value="oldest">Newest</option>
              <option value="salary">Oldest</option>
            </select>
            {status === "authenticated" ? (
              <button
                type="button"
                onClick={handleLogout}
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/auth/login"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Signin
              </Link>
            )}
          </div>
        </div>
      </div>
      {filteredJobs.map((data: Job) => (
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
