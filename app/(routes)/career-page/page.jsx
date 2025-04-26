"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPostingData } from "@/lib/api";
import { setJobPostingData } from "@/store/slices/jobPostingSlice";

const CarrierPage = () => {
  const dispatch = useDispatch();
  const jobPostingData = useSelector((state) => state.job.jobPostingData);

  useEffect(() => {
    const fetchData = async () => {
      if (!jobPostingData) {
        const result = await fetchJobPostingData();
        dispatch(setJobPostingData(result));
      }
    };

    fetchData();
  }, [dispatch, jobPostingData]);

  return (
    <div className="w-11/12 mx-auto mt-10 mb-36">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Career Opportunities
      </h1>

      {!jobPostingData || jobPostingData.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16 text-gray-700">
          <img
            src="/no-jobs.svg"
            alt="No jobs illustration"
            className="w-40 h-40 mb-6"
          />
          <h2 className="text-2xl font-semibold mb-2">No Job Openings Right Now</h2>
          <p className="text-base text-gray-500 mb-6 max-w-xl">
            We’re currently not hiring, but we’re always looking for great talent.
            Please check back soon or follow us on social media for updates!
          </p>
          <a
            href="/"
            className="bg-[#8b1c3c] text-white px-5 py-2 rounded-md hover:bg-[#a52a59] transition-colors duration-300"
          >
            Back to Home
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobPostingData.map((job) => (
            <div
              key={job._id}
              className="bg-white border shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Location:</strong> {job.location || "Not specified"}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Type:</strong> {job.type || "Full-time"}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Posted On:</strong>{" "}
                {job.postedDate ? new Date(job.postedDate).toLocaleDateString() : "N/A"}
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
