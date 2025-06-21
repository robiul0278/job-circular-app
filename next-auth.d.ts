
declare module "next-auth" {

  interface JWT {
    id: string;
  }
  interface Session {
    id: string;
  }
}