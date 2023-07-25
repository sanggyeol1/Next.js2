//로딩중 ui페이지임 page.js가 로드되기 전에 loading을 먼저 보여줌, 모든page.js옆에 loading.js를 생성할 수 있다., client component로 만들어보 상관이 없다.

//react에서 
//<Suspense fallback={<div>로딩중</div>}>
//  <div>보여줄 페이지</div>
//</Suspense> 이러한 문법이 있는데 이것과 loading.js는 동일하다고 보면 된다.

//근데 사실 로딩중일 때 psge.js 옆에 loading.js가 없으면 상위폴더로 이동하면서 loading.js를 찾기 때문에 그냥 app.js에 loading.js를 넣는게 좋다.

export default function Loading(){
    return(
        <h4>로딩중!!!!!!!!!!!!!!!!!</h4>
    )
}