import { AccountTransaction } from "./account-transaction";

export class UserAccount {
    id!: number;
    transactions!: AccountTransaction[];
    userId!: number;
    balance!: number;
}
