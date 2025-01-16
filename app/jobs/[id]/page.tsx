import { sql } from "@vercel/postgres";
import { Job } from "@/app/page";
import { notFound } from "next/navigation";

export default async function JobPage({ params }: { params: { id: string } }) {
  const { rows } = await sql<Job>`
    SELECT * FROM jobs WHERE id = ${params.id}
  `;

  if (rows.length === 0) {
    notFound();
  }

  const job = rows[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="bg-gray-700 px-3 py-1 rounded-full">
                {job.company}
              </span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">
                {job.seniority}
              </span>
              {job.remote && (
                <span className="bg-blue-600 px-3 py-1 rounded-full">
                  Remote
                </span>
              )}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
            <div className="whitespace-pre-wrap">{job.description}</div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              Posted on {new Date(job.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
