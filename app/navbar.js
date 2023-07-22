'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn, signOut } from 'next-auth/react'


export default function NavBar(props){

    let router = useRouter()
    return(
        <div className="navbar"> 
            <Link href="/" className="logo">Appleforum</Link> 
            <Link href="/list">List</Link>
            <Link href="#" onClick={()=>{
                router.back()
            }}> ← </Link>  

            
            
            
            { // JSX내에서는 if문을 사용하지 못하므로 삼항연산자 사용
              !props.session ? <button onClick={()=>{ signIn() }}>로그인</button>: 
              <span>{props.session.user.name} <button onClick={()=>{ signOut() }}>로그아웃</button></span>
            }
        </div>
    )
}

//latout.js같이 모두 적용되는 파일은 서버컴포넌트로 남겨두고
// navbar부분만 따로 떼어서 클라이언트 컴포넌트로 만든다.

