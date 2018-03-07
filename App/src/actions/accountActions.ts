import { Dispatch } from "redux";
import { createAction } from "../helpers/actionHelper";
import * as accountService from "../services/accountService";
import { ThunkAction, Action, Account } from "../models";

export const actions = {
    ACCOUNT_SET_IN_PROGRESS: "ACCOUNT_SET_IN_PROGRESS",
    SET_ACCOUNT: "SET_ACCOUNT",
    UNINITIALIZE_ACCOUNT: "UNINITIALIZE_ACCOUNT",
}

export function getAccount(): ThunkAction {
    return (dispatch: Dispatch<{}>) => {
        dispatch(startGetAccount());
        return accountService.getAccount().then((data) => {
            dispatch(setAccount(data));
        })
    };
}

export function setAccount(account: Account): Action<Account> {
    return createAction(actions.SET_ACCOUNT, account);
}

export function startGetAccount(): Action<void> {
    return createAction(actions.ACCOUNT_SET_IN_PROGRESS, undefined);
}

export function uninitialize(): Action<void> {
    return createAction(actions.UNINITIALIZE_ACCOUNT, undefined);
}