import { UserAccount } from "./user-account";

export class User {
    id!: number;
    name!: string;
    surname!: string;
    accounts!: UserAccount[];
}
