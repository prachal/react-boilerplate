import { Action, State, ThunkAction } from "../models";
import * as loginService from "../services/loginService";
import { Dispatch } from "redux";
import * as Cookie from "js-cookie";
import * as accountActions from "./accountActions";

export function login(userName: string, password: string): ThunkAction {
    return (dispatch: Dispatch<{}>) => {
        return loginService.login(userName, password).then((cookieValue) => {
            Cookie.set("Authorization", cookieValue);
        });;
    };
}

export function logout(): (dispatch: Dispatch<{}>) => void {
    return (dispatch: Dispatch<{}>) => {
        Cookie.set("Authorization", undefined);
        dispatch(accountActions.uninitialize());
    }
}