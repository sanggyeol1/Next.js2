import Link from "next/link";
import { connectDB } from "@/util/database"
import ListItem from "./ListItem";

import Write from "../write/page";
import WriteLink from "./writeLink";


export default async function List() {
  
  const db = (await connectDB).db("forum")//db에접속
  let result = await db.collection('post').find().toArray()
    //post collection에 있는 모든 데이터를 출력해주세요
    // console.log(result)
    
    return(
        <div>
          <div className="list-bg">
          <ListItem result={result}/>
          <WriteLink/>
          </div>
      </div>
    )    
  } 