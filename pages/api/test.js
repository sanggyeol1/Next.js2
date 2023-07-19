//서버기능 : next.js는 누가 /api/test로 GET/POST/PUT/DELETE/PATCH 요청하면 이곳의 코드가 자동으로 실행이 됨


export default function handler(요청, 응답){
 
        응답.status(200).json('처리완료')//이런식으로 응답을 해줘야 한다. 200은성공했다,500은 실패했다.400은 유저잘못으로 실패했다
}

// 숙제1. /api/list로 GET요청하면 DB에 있던 post 컬렉션의 모든 데이터 보내주기
