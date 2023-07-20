import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답){
    // await을 쓰고싶다면 async붙이기

    if(요청.method == 'POST'){
        const db = (await connectDB).db("forum")//db에접속
        let 바꿀거 = {title : 요청.body.title, content : 요청.body.content}  //수정할 내용

        
        let result = await db.collection('post')
        .updateOne(
            { _id: new ObjectId(요청.body._id) },//어떤 document 수정할지  
            { $set : 바꿀거 }
        )
        
        return 응답.status(200).json('수정 완료');
        

            
    }
    
}