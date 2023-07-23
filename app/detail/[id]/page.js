//  /어쩌구에 아무거나 입력해도 페이지 보여줌] == 다이나믹 라우트
// 글의 detail이나 edit사항 같이 반복되는 곳에서 사용하면 좋음
import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import  Comment  from './Comment.js'
import { getServerSession } from "next-auth";

export default async function Detail(props){//props : 유저가 다이나믹 라우트에 입력한 값을출력가능

    const db = (await connectDB).db("forum")//db에접속
    let result = await db.collection('post').findOne({ _id: new 
    ObjectId(props.params.id) });// / 이후의 값이 아이디인 값을 db내의 post collection에서 찾음
   
   /* 보여주기 */
    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <Comment/>
        </div>
    )
}