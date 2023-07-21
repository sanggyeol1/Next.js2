import { connectDB } from "/util/database.js"


export default async function Home() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray(); //post컬렉션의 모든 데이터를 array로 바꿔주세요
  //db출력 결과도 캐싱이 가능하다.
  //1. fetch로 바꾼다.
  //2. revalidate 옵션을 사용해도 된다.


  return (
    <main>
      <h3>게시판 기능</h3>
    </main>
  )
}