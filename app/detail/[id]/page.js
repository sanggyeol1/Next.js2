//  /어쩌구에 아무거나 입력해도 페이지 보여줌] == 다이나믹 라우트
// Q : url달라도 보이는 내용이 같은데요? -> 
import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props){

    const db = (await connectDB).db("forum")//db에접속
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})// / 이후의 값이 아이디인 값을 db에서 찾음
    console.log(props.params.id)
    
    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}