'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NavBar(){

    let router = useRouter()
    return(
        <div className="navbar"> 
            <Link href="/" className="logo">Appleforum</Link> 
            <Link href="/list">List</Link>
            <Link href="#" onClick={()=>{
                router.back()
            }}> ← </Link>  
        </div>
    )
}

//latout.js같이 모두 적용되는 파일은 서버컴포넌트로 남겨두고
// navbar부분만 따로 떼어서 클라이언트 컴포넌트로 만든다.

