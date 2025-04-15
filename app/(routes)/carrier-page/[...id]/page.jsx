
'use client'

import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import ApplyJobForm from "@/components/career/ApplyJobForm";


const SpecificJobPosting = () => {
  const queryClient = useQueryClient();
  const { jobId } = useParams();

  console.log("Job ID is:", jobId);

  // Fetch the cached career data from React Query
  const cachedJobs = queryClient.getQueryData(["career-data"])?.data || [];
  const job = cachedJobs.find((job) => job._id === jobId);

  if (!job) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium text-gray-600">
        Job posting not found.
      </div>
    );
  }

  console.log("cached jobs", cachedJobs);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        {job.title}
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8">
        {/* Company Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            About the Company
          </h2>
          <p className="text-gray-600">{job.company?.about || "No information available."}</p>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Location:</strong> {job.jobLocationType || "Not specified"}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Employment Type:</strong> {job.employmentType || "Full-time"}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Salary:</strong> {job.salary || "Not specified"}
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Posted On:</strong> {new Date(job.postedDate).toLocaleDateString() || "N/A"}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Valid Until:</strong> {new Date(job.validUntil).toLocaleDateString() || "N/A"}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Status:</strong> {job.status || "Active"}
            </p>
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Job Description</h2>
          <div className="text-gray-600 space-y-2">
            {job.jobDescription
              ? job.jobDescription.replace(/\\n/g, "\n").split("\n").map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))
              : "No description available."}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {job.responsibilities
              ? job.responsibilities[0].replace(/\\n/g, "\n").split("\n").map((line, index) => (
                  <li key={index}>{line.trim()}</li>
                ))
              : "No responsibilities available."}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {job.benefits
              ? job.benefits[0].replace(/\\n/g, "\n").split("\n").map((line, index) => (
                  <li key={index}>{line.trim()}</li>
                ))
              : "No benefits available."}
          </ul>
        </div>

        {/* Application Process */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Application Process</h2>
          <p className="text-gray-600">
            <strong>Email:</strong> {job.applicationProcess?.contactEmail || "Not provided"}
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> {job.applicationProcess?.contactPhone || "Not provided"}
          </p>
        </div>
      </div>

      <div>
        <ApplyJobForm jobId={job._id} />
      </div>
    </div>
  );
};

export default SpecificJobPosting;