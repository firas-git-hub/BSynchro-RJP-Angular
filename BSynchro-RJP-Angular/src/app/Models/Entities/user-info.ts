import { UserAccount } from "./user-account";

export class UserInfo {
    name!: string;
    surname!: string;
    accountList!: UserAccount[];
    totalBalance!: number;
}
