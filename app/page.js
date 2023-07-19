import { connectDB } from "/util/database.js"
import Link from "next/link";

export default async function Home() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray(); //post컬렉션의 모든 데이터를 array로 바꿔주세요
  

  return (
    <main>
      {result[0].title}
      <Link href="/list">list</Link>
    </main>
  )
}4