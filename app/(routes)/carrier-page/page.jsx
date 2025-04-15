'use client'

import { useQueries } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetcher } from "@/hooks/useFetch";

import { Turnstile } from "@marsidev/react-turnstile";

const CarrierPage = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  console.log("backend url ",backend_url);

  const results = useQueries({
    queries: [
      {
        queryKey: ["career-data"],
        queryFn: () =>
          fetcher({
            url: `${backend_url}/jobs/getAllJobs`,
          }),
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchInterval: 1000 * 60 * 30, // Automatically refetch every 30 minutes
      },
    ],
  });

  const [allJobsData] = results;

  const isLoading = allJobsData.isLoading;
  const isError = allJobsData.isError;

  if (isError) {
    toast.error(
      allJobsData.error?.message || "Failed to load data"
    );
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium text-red-600">
        Failed to load data.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium text-gray-600">
        Loading data, please wait...
      </div>
    );
  }

  const jobs = allJobsData.data?.data || [];

  console.log("Jobs data is ", jobs);

  return (
    <div className="w-11/12 mx-auto mt-10 mb-36">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Career Opportunities
      </h1>
      {jobs.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          No job postings available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Location:</strong> {job.location || "Not specified"}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Type:</strong> {job.type || "Full-time"}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Posted On:</strong>{" "}
                {new Date(job.postedDate).toLocaleDateString() || "N/A"}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {job.description || "No description available."}
              </p>
              <a
                href={`/career-page/${job._id}`}
                className="inline-block bg-[#8b1c3c] text-white py-2 px-4 rounded-md hover:bg-[#a52a59] transition-colors duration-300"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarrierPage;