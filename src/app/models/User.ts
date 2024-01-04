import { Role } from "./Role";

export class User {
    idUser?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    email?: string;
    status?: number;
    role?: Role;
}