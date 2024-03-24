"use client";
import ErrorMessage from "@/components/ErrorMessage";
import JobDetailUi from "@/components/JobDetailUi";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetJobQuery } from "@/lib/features/api/apiSlice";
import { ABOUTDATA } from "@/lib/features/jobs/types";

interface Props {
  params: {
    JobId: string;
  };
}

const JobDetail = ({ params }: Props) => {
  const { JobId } = params;
  let responsibilities = [];
  let ideal_candidate = [];
  let about: Array<ABOUTDATA> = [];
  const {
    data: job,
    error,
    isLoading,
  } = useGetJobQuery(`opportunities/${JobId}`);
  if (job) {
    responsibilities = job.data.responsibilities.split("\n");
    ideal_candidate = job.data.idealCandidate.split("\n");
    const changeDateFromat = (dateString: string) => {
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
      return formattedDate;
    };
    about = [
      {
        id: 1,
        imagePath: "/assets/postedon.svg",
        title: "Posted On",
        description: changeDateFromat(job.data.datePosted),
      },
      {
        id: 2,
        imagePath: "/assets/deadline.svg",
        title: "Deadline",
        description: changeDateFromat(job.data.deadline),
      },
      {
        id: 3,
        imagePath: "/assets/location.svg",
        title: "Location",
        description: job.data.location,
      },
      {
        id: 4,
        imagePath: "/assets/startdate.svg",
        title: "Start Date",
        description: changeDateFromat(job.data.startDate),
      },
      {
        id: 5,
        imagePath: "/assets/enddate.svg",
        title: "End Date",
        description: changeDateFromat(job.data.endDate),
      },
    ];
  }
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  return (
    <JobDetailUi
      about={about}
      categories={job.data.categories}
      description={job.data.description}
      idealCandidate={ideal_candidate}
      location={job.data.location}
      logoUrl={job.data.logoUrl}
      orgName={job.data.orgName}
      requiredSkills={job.data.requiredSkills}
      responsibilities={responsibilities}
      title={job.data.title}
      whenAndWhere={job.data.whenAndWhere}
    />
  );
};

export default JobDetail;
