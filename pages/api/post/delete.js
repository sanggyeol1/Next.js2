import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(요청, 응답){
    // await을 쓰고싶다면 async붙이기

    let session = await getServerSession(요청, 응답, authOptions)//현재유저정보가져오기
    
   
        
        if(요청.method == 'POST'){
            let 지울것 = JSON.parse(요청.body)
            console.log(지울것)

            if(session.user.email == 지울것.author){//현재유저정보와 글작성자의 email비교
                const db = (await connectDB).db("forum") //db에접속
                let result = await db.collection('post').deleteOne(
                { _id: new ObjectId(지울것._id) })
                return 응답.status(200).json('삭제 완료');
            }
                
                
        }
            
        //result 값을 출력하면 몇개의 db가 삭제되었는지 알 수 있다. 
        
        }
       
    
