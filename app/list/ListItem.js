//list의 page.js파일은 큰 파일이라서 내부에 자바스크립트 코드를 작성하려고 use client를 사용했다가는
//기능저하나 노출에서의 불이익이 있을수 있으므로 클라이언트 컴포넌트를 따로 빼서 박는 형식으로 하자.
'use client'
import Link from "next/link";




export default function ListItem(props){

    // useEffect(()=>{

    // }) 여기서 db자료끌어와도 되는데 검색엔진 노출이 힘들어짐
    

    return(
        <div>
            {
                props.result.map((a, i)=>{
                    return(
                    <div className="list-item" key={i}>
                        <Link className="link-title" href={'/detail/'+ props.result[i]._id}>
                        {props.result[i].title}
                        </Link>
                        <Link href={'/edit/' + props.result[i]._id}> ✏️ </Link>
                        <span onClick={()=>{
                            //이 주소로 요청 가능, {method : 'POST'입력하면 POST요청가능}
                            fetch('/api/post/delete',{
                                method : "POST",
                                body : JSON.stringify({_id : props.result[i]._id})
                                
                            }).then(()=>{//서버 응답시 실행할 코드
                                
                            })
                        }}>🗑️</span>
                        <p>{props.result[i].content}</p>
                        <p>07월 19일</p>
                    </div>
                    )
                })
            }
        </div>
    )
}