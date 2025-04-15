import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

import { Turnstile } from "@marsidev/react-turnstile";

const ApplyJobForm = () => {
  const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL

  const siteKey = process.env.NEXT_PUBLIC_SITE_KEY;

  console.log("site key is ",siteKey);

  const { jobId } = useParams();

  const [formData, setFormData] = useState({
    jobId: jobId,
    name: "",
    email: "",
    phoneNo: "",
    resumeFile: null,
  });

  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resumeFile: e.target.files[0],
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    console.log("token value is ",token);

    console.log("token is ",token);

    // Validation
    if (!formData.jobId || !formData.name || !formData.email || !formData.phoneNo || !formData.resumeFile) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("jobId", formData.jobId);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNo", formData.phoneNo);
      formDataToSend.append("resumeFile", formData.resumeFile);

      formData.append("turnstileToken",token);

      const result = await axios.post(`${backend_url}/jobs/apply-to-job`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("application submitted successfully");

      setSuccess("Application submitted successfully!");
      setFormData({
        jobId: "",
        name: "",
        email: "",
        phoneNo: "",
        resumeFile: null,
      });
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Apply for the Job</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {success && <p className="text-green-600 text-center mb-4">{success}</p>}
      <form className="space-y-6" onSubmit={submitHandler}>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#8b1c3c] focus:border-[#8b1c3c]"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#8b1c3c] focus:border-[#8b1c3c]"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#8b1c3c] focus:border-[#8b1c3c]"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label htmlFor="resumeFile" className="block text-sm font-medium text-gray-700">
            Upload Resume
          </label>
          <input
            type="file"
            id="resumeFile"
            onChange={handleFileChange}
            className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-[#8b1c3c] focus:border-[#8b1c3c] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#8b1c3c] file:text-white hover:file:bg-[#a52a59]"
          />
        </div>

        <div className="flex items-center space-y-2 gap-12">

          <Turnstile

            siteKey={siteKey}
            onSuccess={(data) => {

              console.log("token is ", token);
              setToken(data);
            }}
          />

        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#8b1c3c] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#a52a59] transition-colors duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyJobForm;

