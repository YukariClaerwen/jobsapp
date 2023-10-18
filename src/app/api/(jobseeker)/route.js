
// import db from '@/modules/db'
// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';
// import { faker } from '@faker-js/faker';
// import { revalidatePath } from 'next/cache';
 
// export async function GET(request) {
//   try {
//     // const result =
//     //   await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
//     const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } });
//     return NextResponse.json({ posts }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

// export async function POST (req, res, next) {
//     try {
//         const result = await db.post.createMany({
//             data: [
//               { content: faker.lorem.sentence() },
//               { content: faker.lorem.sentence() },
//               { content: faker.lorem.sentence() },
//             ],
//           });
//           revalidatePath('/');
//         return NextResponse.json({ result }, { status: 200 });
//       } catch (error) {
//         return NextResponse.json({ error }, { status: 500 });
//       }
// }