import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET() {
  const { rows } = await sql`
    SELECT * FROM jobs 
    ORDER BY created_at DESC
  `
  return NextResponse.json(rows)
}

export async function POST(request: Request) {
  const body = await request.json()

  const { rows: [job] } = await sql`
    INSERT INTO jobs (company, title, remote, seniority, description, created_at)
    VALUES (${body.company}, ${body.title}, ${body.remote}, ${body.seniority}, ${body.description}, NOW())
    RETURNING *
  `

  return NextResponse.json(job)
}

