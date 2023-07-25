//에러 시 나옴
//에러페이지 만드려면 1. error.js만들고 2. export default client 컴포넌트

//page.js 부분만 error.js로 바꿔준다는 특징이 있다.(깔끔함)
//이 에러메시지는 개발 중에만 보이고 일반 사용자는 볼 수 없다.

//근데 사실 에러가 났을 때 psge.js 옆에 error.js가 없으면 상위폴더로 이동하면서 error.js를 찾기 때문에 그냥 app.js에 error.js를 넣는게 좋다.

//참고 : error.js는 옆에 있는 layout.js에러를 체크하지 못한다. -> global-error.js만들면 최상위 layout.js에러 체크가 가능하다.
'use client'

export default function Error({error, reset}){
    console.log(error)
    return(
        <div>
        <h4>에러남 ㅅㄱ</h4>
        <button onClick={()=>{ reset() }}>리셋버튼</button>
        </div>
    )
}