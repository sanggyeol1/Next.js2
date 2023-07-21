import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답){
    // await을 쓰고싶다면 async붙이기

        const db = (await connectDB).db("forum")//db에접속

        if(요청.method == 'POST'){
        let result = await db.collection('post').deleteOne(
            { _id: new ObjectId(요청.body) }
        )

        console.log(result)//result 값을 출력하면 몇개의 db가 삭제되었는지 알 수 있다. 
        return 응답.status(200).json('삭제 완료');
        }
       
    
}