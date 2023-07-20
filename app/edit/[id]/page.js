//  /어쩌구에 아무거나 입력해도 페이지 보여줌] == 다이나믹 라우트
// Q : url달라도 보이는 내용이 같은데요? -> 
import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props){//props : 유저가 다이나믹 라우트에 입력한 값을출력가능
    
    const db = (await connectDB).db("forum")//db에접속
    let result = await db.collection('post').findOne({ _id: new 
    ObjectId(props.params.id) });// / 이후의 값이 아이디인 값을 db에서 찾음
   
   


   
    return(
        <div>
            <h4>글 수정 페이지</h4>
            <form action="/api/post/edit" method="POST" >
                {/* 만들어서 POST요청에 같이 보내고 css로 숨겨버리기,toString으로문자열전환*/}
                <input name="_id" className="hidden" defaultValue={result._id.toString()}/>
                <input name="title" placeholder="글제목" defaultValue={result.title}/>
                <input name="content" placeholder="글내용" defaultValue={result.content}/>
                <button type="submit">글 수정</button>
            </form>
        </div>
    )
}