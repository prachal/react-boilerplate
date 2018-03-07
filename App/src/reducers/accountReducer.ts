import { Entity, Account, Action } from "../models";
import { createReducer } from "../helpers/createReducer";
import { actions } from "../actions/accountActions";

type ReducerType = Entity<Account>;

const initialState: ReducerType = {
    isInitialized: false,
    isLoading: false,
    data: {},
    error: undefined,
}

export const accountReducer = createReducer(initialState, {
    [actions.ACCOUNT_SET_IN_PROGRESS]: setAccountInProgress,
    [actions.SET_ACCOUNT]: setAccount,
    [actions.UNINITIALIZE_ACCOUNT]: uninitializeAccount,
});

function setAccountInProgress(state: ReducerType, action: Action<void>): ReducerType {
    return {
        ...state,
        ...{
            isLoading: true,
        } as ReducerType
    };
}

function setAccount(state: ReducerType, action: Action<Account>): ReducerType {
    return {
        ...state,
        ...{
            isInitialized: true,
            isLoading: false,
            data: {...state, ...action.value}
        } as ReducerType,
    };
}

function uninitializeAccount(state: ReducerType, action: Action<void>): ReducerType {
    return {
        isInitialized: false,
        isLoading: false,
        data: {}
    };
}