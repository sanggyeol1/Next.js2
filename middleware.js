import { NextResponse } from "next/server";
//미들웨어 코드임
//유저가 GET, POST요청하면 안에있는 코드가 먼저 실행됨
export function middleware(request){
    console.log(request.nextUrl)
    console.log(request.cookies)
    console.log(request.headers)//이러한 코드를 통해서 유저들을 검열하고 감시할 수 있다.
    NextResponse.next() //통과
    NextResponse.redirect()//다른페이지로 이동
    NextResponse.rewrite()// url은 유지를 시키는데 다른페이지이동


    //특정 페이지 접속하는 사람들 기록하기 
    if (request.nextUrl.pathname == '/list') {
        console.log(new Date().toLocaleString())
        console.log(request.headers.get('sec-ch-ua-platform'))
        return NextResponse.next()
      }
}