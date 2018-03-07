import { RouterState } from "react-router-redux";
import { FormState } from "redux-form";
import {Dispatch} from "redux";

export type Action<T> = {
    type: string,
    value: T,
}

export type ThunkAction = (dispatch: Dispatch<{}>, getState: () => State) => Promise<void>

export type Entity<T> = {
    isInitialized: boolean;
    isLoading: boolean;
    data: T,
    error?: {},
}

export type State = {
    routing: RouterState,
    form: FormState,
    account: Entity<Account>,
};

export type Account = {
    userName?: string,
    email?: string,
    phoneNumber?: string,
}