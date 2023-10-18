import Button from '@/components/Button';
import db from '@/modules/db'
import { faker } from '@faker-js/faker';
import { revalidatePath } from 'next/cache';
import Image from 'next/image'

export default async function Home() {
  const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } });

  const generatePosts = async () => {
    'use server';

    await db.post.createMany({
      data: [
        { content: faker.lorem.sentence() },
        { content: faker.lorem.sentence() },
        { content: faker.lorem.sentence() },
      ],
    });
    revalidatePath('/');
  }
  console.log(posts.length)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={generatePosts}>Generate Posts</Button>

      <div>
        {posts.length && posts.map((p, index) => {
          return <div key={p.id}>{index+1}. {p.content}</div>
          
        })}
      </div>
    </main>
  )
}
