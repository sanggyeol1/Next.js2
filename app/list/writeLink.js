'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"


export default function WriteLink(){
    let router = useRouter() // useRouter를 이용한 링크설정
    let a = usePathname()
    let b = useSearchParams()

    return(
        <button style={{margin : 5}} onClick={()=>{
            router.push('write') // useRouter를 이용한 링크설정 router.back()을쓰면 뒤로가기
        }}>글쓰기</button>
    )
}