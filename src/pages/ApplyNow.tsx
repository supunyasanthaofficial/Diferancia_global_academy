import React, { useState } from "react";

const ApplyNow: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resumeName = resume ? resume.name : "no resume";
    alert(
      `Thanks ${fullName || "Applicant"} — we received your application (${resumeName}).`,
    );
    setFullName("");
    setEmail("");
    setCourse("");
    setResume(null);
    setMessage("");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">Apply Now</h1>
      <p className="text-gray-600 mb-6">
        Ready to join? Fill out the form and we'll review your application.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-sm"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course
          </label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select a course</option>
            <option>Full Stack Web Development</option>
            <option>Data Science</option>
            <option>UX Design</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resume (optional)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            className="w-full"
          />
          {resume && (
            <div className="text-sm text-gray-600 mt-1">
              Selected: {resume.name}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400"
            placeholder="Tell us about your background"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Submit Application
          </button>
          <span className="text-sm text-gray-500">
            We’ll review and contact you within 3 business days.
          </span>
        </div>
      </form>
    </section>
  );
};

export default ApplyNow;
