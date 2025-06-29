import { Role } from "@prisma/client";
import {DefaultUser} from "next-auth"

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    username: string;
    name?: string;
    role?: Role;
  }

  interface Session {
    user: {
      id: string;
      username: string;
      name?: string;
      role?: string;
    } & DefaultSession["user"];
  }
}