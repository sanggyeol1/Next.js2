export default function Write(){
    
    return(
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목"/>
                <input name="content" placeholder="글내용"/>
                <button type="submit">글 발행</button>
            </form>
            {/* 여기서 폼태그를 이용해 api/post/new에다가POST요청을 보냄
            그럼 서버에서는 db에 글을 추가함(insertOne) */}
        </div>
    )
}