import { Job } from "@/app/page";
import Link from "next/link";

export function JobListing({ job }: { job: Job }) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200 transform hover:scale-[1.02] cursor-pointer border border-gray-700 hover:border-gray-600 shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-white mb-2 line-clamp-2">
            {job.title}
          </h2>
          <div className="flex-shrink-0">
            {job.remote && (
              <span className="bg-blue-600 text-sm px-2.5 py-1 rounded-full font-medium">
                Remote
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-gray-300 font-medium mb-2">{job.company}</div>
          <span className="bg-gray-700 text-sm px-2.5 py-1 rounded-full text-gray-300">
            {job.seniority}
          </span>
        </div>

        {job.description && (
          <p className="text-gray-400 text-sm line-clamp-3 mb-4">
            {job.description}
          </p>
        )}

        <div className="text-gray-400 text-sm">
          Posted {new Date(job.created_at).toLocaleDateString()}
        </div>
      </div>
    </Link>
  );
}
