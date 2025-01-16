import { JobListing } from "@/components/JobListing";
import { sql } from "@vercel/postgres";

// Define the Job type to fix the TypeScript error
export type Job = {
  id: number;
  company: string;
  title: string;
  remote: boolean;
  seniority: string;
  created_at: Date;
};

export default async function JobBoard() {
  const { rows: jobs } = await sql<Job>`
    SELECT * FROM jobs 
    ORDER BY created_at DESC
  `;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Tech Job Board</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
}
