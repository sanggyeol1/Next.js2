import { connectDB } from "@/util/database"

export default async function List() {
    
    const db = (await connectDB).db("forum")//db에접속
    let result = await db.collection('post').find().toArray()//post collection에 있는 모든 데이터를 출력해주세요
    console.log(result)
    return(
        <div>
            <div className="list-bg">
              {
                result.map((a, i)=>{
                    return(
                      <div className="list-item" key={i}>
                        <h4>{result[i].title}</h4>
                        <p>{result[i].content}</p>
                      </div>
                    )
                })
            }
            </div>
        </div>
    )    
  } 