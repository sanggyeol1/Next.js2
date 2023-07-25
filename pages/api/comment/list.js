import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청,응답){

        
    
        const db = (await connectDB).db("forum")//db에접속
        let result = await db.collection('comment')
        .find({ parent : new ObjectId(요청.query.id) }).toArray()//comment콜렉션에 저장되어있는 parent가 xx인 요소 찾아와주세요
        응답.status(200).json(result)
   
}



// let result = await db.collection('comment').find().toArray()//comment콜렉션에 저장되어있는 모든 document를 찾아와주세요

