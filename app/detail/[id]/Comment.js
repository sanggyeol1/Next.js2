'use client'
import {useEffect, useState} from "react"


export default  function Comment(props){
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])
    //client component로드 시 서버에 데이터 요청하려면 useEffect사용
    useEffect(()=>{//쓸데없는 코드 보관함, 보통 ajax나 타이머를 넣음
        fetch('/api/comment/list?id='+props.result._id).then(r=>r.json())
        .then((result)=>{
           setData(result)
        }) //서버에서 보낸 데이터를 출력하고싶으면 이렇게
        
    },[])//대괄호 넣으면 comment컴포넌트가 로드될 때 1회만 실행됨
    

    return(
        <div>
            <hr></hr>
            {
                data.map(function(a, i){
                    return(
                        <p key={i}>{a.content}</p>
                    )
                    })
            }
               


            <input onChange={(e)=>{ setComment(e.target.value) }}/>
            {/* 폼태그를 사용하면 새로고침이 되기때문에 패치를 쓴다. */}
            <button onClick={()=>{
                fetch('/api/comment/new', {
                    method : 'POST', 
                    body : JSON.stringify({
                        comment : comment,
                        _id : props.result._id
                    })
                }).then(
                    fetch('/api/comment/list?id='+props.result._id).then(r=>r.json())
                .then((result)=>{
                   setData(result)
                }))
                
                 //서버에서 보낸 데이터를 출력하고싶으면 이렇게
            }}>댓글전송</button>
        </div>
    )
}
