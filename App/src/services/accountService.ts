import { get } from "./proxy";
import { Account } from "../models";

export function getAccount(): Promise<Account> {
    return get<Account>("Accounts");
}