'use client'

export default function Write(){
    
    return(
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목"/>
                <input name="content" placeholder="글내용"/>
                <input type="file" accept="image/*" 
                    onChange={async(e)=>{
                        let file = e.target.files[0]
                        let filename = encodeURIComponent(file.name) 
                        let res = await fetch('/api/post/image?file='+filename)
                        res = await res.json()
                        console.log(res)
                    }}/>
                <img src=""/>
                <button type="submit">글 발행</button>
            </form>
            {/* 여기서 폼태그를 이용해 api/post/new에다가POST요청을 보냄
            그럼 서버에서는 db에 글을 추가함(insertOne) */}
        </div>
    )
}