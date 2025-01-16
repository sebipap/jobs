import { Job } from '@prisma/client'

export function JobListing({ job }: { job: Job }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-white mb-2">{job.title}</h2>
      <p className="text-gray-300 mb-2">{job.company}</p>
      <div className="flex justify-between text-sm text-gray-400">
        <span>{job.remote ? 'Remote' : 'On-site'}</span>
        <span>{job.seniority}</span>
      </div>
    </div>
  )
}

