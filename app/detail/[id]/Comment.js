'use client'
import {useState} from "react"


export default function Comment(){
    let [comment, setComment] = useState('')


    return(
        <div>
            <div>댓글목록보여줄부분</div>
            <input onChange={(e)=>{
                setComment(e.target.value) 
            }}/>
            {/* 폼태그를 사용하면 새로고침이 되기때문에 패치를 쓴다. */}
            <button onClick={()=>{
                console.log(comment)
                fetch('URL', {
                    method : 'POST', 
                    body : JSON.stringify({
                        content : comment,
                       
                    })
                })
            }}>댓글전송</button>
        </div>
    )
}
