import Link from "next/link";
import { connectDB } from "@/util/database"

import Write from "../write/page";
import WriteLink from "./writeLink";


export default async function List() {
    
    const db = (await connectDB).db("forum")//db에접속
    let result = await db.collection('post').find().toArray()//post collection에 있는 모든 데이터를 출력해주세요
    // console.log(result)
    return(
        <div>
            <div className="list-bg">
              {
                result.map((a, i)=>{
                    return(
                      <div className="list-item" key={i}>
                        <Link className="link-title" href={'/detail/'+ result[i]._id}>
                          {result[i].title}
                        </Link>
                        <Link href={'/edit/'+result[i]._id}> ✏️ </Link>
                        <p>{result[i].content}</p>
                        
                      </div>
                    )
                })
                
              }
            <WriteLink/>
            </div>
        </div>
    )    
  } 