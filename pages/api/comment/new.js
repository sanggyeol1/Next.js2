import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";


export default async function handler(요청, 응답){
    
    if(요청.method == 'POST'){
        let session = await getServerSession(요청, 응답, authOptions) //현재 로그인한 유저의 정보 얻음
        요청.body = JSON.parse(요청.body)//파싱

        let 저장할거 = {
            content : 요청.body.comment,
            parent : new ObjectId(요청.body._id),
            author : session.user.email
        }//object자료형으로 만든 후 한번에 db에 저장

        if(session){
            
        const db = (await connectDB).db("forum")//db에접속
        let result = await db.collection('comment').insertOne(저장할거)//db에 저장
        
        응답.status(200).json('발행 완료');
        }
        
    }
    
}
//로그인상태인지? + 빈칸상태인지?