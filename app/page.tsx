import { JobListing } from "@/components/JobListing";
import { sql } from "@vercel/postgres";

// Define the Job type to fix the TypeScript error
export type Job = {
  id: number;
  company: string;
  title: string;
  remote: boolean;
  seniority: string;
  description: string;
  created_at: Date;
};

export default async function JobBoard() {
  const { rows: jobs } = await sql<Job>`
    SELECT * FROM jobs 
    ORDER BY created_at DESC
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Tech Job Board
            </h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Post a Job
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
