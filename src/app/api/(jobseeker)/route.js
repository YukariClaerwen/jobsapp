
import db from '@/modules/db'
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    // const result =
    //   await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function loadPosts() {
    const res = (await GET());
    const data = await res.json();
    return await data.posts
}

export async function POST (request) {
    try {
        const result = await db.post.createMany(request);
        return NextResponse.json({ result }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
}

export async function generatePs(request) {
    return POST(request)
}