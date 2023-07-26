'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn, signOut } from 'next-auth/react'
import { useEffect } from "react"


export default function NavBar(props){
    
    useEffect(()=>{
        //쿠키값이 없으면 쿠키 저장
        let 쿠키값 = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
        if(쿠키값 == ''){
            document.cookie = 'mode=light; max-age='+(3600*24*400)
        }
        
    },[])


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
            
            <span className="darkBtn" onClick={()=>{
let 쿠키값 = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]//쿠키값 가져옴

               if(쿠키값 == 'dark'){
                document.cookie = 'mode=light; max-age='+(3600*24*400)
                router.refresh()
                document.getElementsByClassName('darkBtn')[0].innerText = " 🌙"
               }else{
                document.cookie = 'mode=dark; max-age='+(3600*24*400)
                router.refresh()//이쁘게 새로고침하는법
                document.getElementsByClassName('darkBtn')[0].innerText = " ☀️"
               }
            }}> 🌙 </span>
        </div>
    )
}

//latout.js같이 모두 적용되는 파일은 서버컴포넌트로 남겨두고
// navbar부분만 따로 떼어서 클라이언트 컴포넌트로 만든다.

