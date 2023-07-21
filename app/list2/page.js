import { connectDB } from "@/util/database"
import ListItem from "./ListItem";
import WriteLink from "./writeLink";

// export const dynamic = 'force-dynamic'//다이나믹 렌더링으로 수정
export const revalidate = 20;//20초동안 캐싱된 결과 사용

export default async function List() {
  
  const db = (await connectDB).db("forum")//db에접속
  let result = await db.collection('post').find().toArray()
    //post collection에 있는 모든 데이터를 출력해주세요
    // console.log(result)
    
    return(
        <div>
          <div className="list-bg">
          <ListItem result={result}/>
          <WriteLink/>
          </div>
      </div>
    )    
  } 