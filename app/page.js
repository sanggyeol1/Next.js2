import { connectDB } from "/util/database.js"

export default async function Home() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray(); //post컬렉션의 모든 데이터를 array로 바꿔주세요
  console.log(result)

  return (
    <main>
      {result[0].title}
    </main>
  )
}4