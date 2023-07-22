import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "@/util/database";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [//구현하고싶은 로그인 방식 구글 프로바이버, 카카오 프로바이더 깃헙 프로바이더 등등 자신이 연동하고싶은 사이트를 적으면 됨
    GithubProvider({
      clientId: 'd9ac6f93b7ca08e2be02',//깃헙에서 발급받은ID
      clientSecret: 'f9ae4fe440bd216110889fce545fb9934715fcbb',//비번
    }),
  ],
  secret : 'xpflgks4201',   //'jwt생성시쓰는암호'
  adapter : MongoDBAdapter(connectDB)  //세션기능 사용시 필요, 다른bd사용하고싶으면 다른 db어댑터 찾아서 사용하면 됨
};
export default NextAuth(authOptions); 