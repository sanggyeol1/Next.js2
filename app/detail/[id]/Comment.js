'use client'
import {useEffect, useState} from "react"


export default function Comment(props){
    let [comment, setComment] = useState('')

    //client component로드 시 서버에 데이터 요청하려면 useEffect사용
    useEffect(()=>{//쓸데없는 코드 보관함, 보통 ajax나 타이머를 넣음
        fetch()
    },[])//대괄호 넣으면 comment컴포넌트가 로드될 때 1회만 실행됨
    

    return(
        <div>
            <div>

            </div>


            <input onChange={(e)=>{ setComment(e.target.value) }}/>
            {/* 폼태그를 사용하면 새로고침이 되기때문에 패치를 쓴다. */}
            <button onClick={()=>{
                fetch('/api/comment/new', {
                    method : 'POST', 
                    body : JSON.stringify({
                        comment : comment,
                        _id : props.result._id
                    })
        
                })
            }}>댓글전송</button>
        </div>
    )
}
