import { connectDB } from "@/util/database"

export default async function handler(요청, 응답){

    
  
    if(요청.method == 'POST'){
        const db = (await connectDB).db("forum")//db에접속
        let result = await db.collection('post').insertOne(요청.body)//db에 저장
        
        return 응답.status(200).json('발행 완료');
        
    }
    
}