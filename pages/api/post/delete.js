import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(요청, 응답){
    // await을 쓰고싶다면 async붙이기

    let session = await getServerSession(요청, 응답, authOptions)
    
    

        if(요청.method == 'POST'){

           
                const db = (await connectDB).db("forum") //db에접속
                let result = await db.collection('post').deleteOne(
                { _id: new ObjectId(요청.body) })
            
            
        
            
            }
            return 응답.status(200).json('삭제 완료');
        //result 값을 출력하면 몇개의 db가 삭제되었는지 알 수 있다. 
        
        }
       
    
