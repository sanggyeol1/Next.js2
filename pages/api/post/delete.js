import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답){
    // await을 쓰고싶다면 async붙이기

        
        
        let 삭제 = JSON.parse(요청.body)//따옴표 들어있는 요청.body를 삭제에 대입 후 파싱
        const db = (await connectDB).db("forum")//db에접속
 
        if(요청.method == 'POST'){
        let result = await db.collection('post').deleteOne(
            { _id: new ObjectId(삭제._id) }
        )
        응답.status(200).json('수정 완료');
        }
       
        
        
            
    
    
}