import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답){

    
  
    if(요청.method == 'POST'){
        let session = await getServerSession(요청, 응답, authOptions) //현제 로그인한 유저의 정보 얻음
        
        if(session){
            요청.body.author = session.user.email //요청.body에 author 추가
        
        const db = (await connectDB).db("forum")//db에접속
        let result = await db.collection('post').insertOne(요청.body)//db에 저장
        
        return 응답.status(200).json('발행 완료');
        }else{
            return 응답.status(500).json('로그인 먼저하슈');
        }
        
    }
    
}