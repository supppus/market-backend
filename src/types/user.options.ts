import { Roles } from "./roles.options";
export interface userAccount {
  firstName?: string;
  role: Roles;
  password: string;
}