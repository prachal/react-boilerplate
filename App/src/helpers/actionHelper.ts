import { Action } from "../models";

export function createAction<T>(type: string, value: T): Action<T> {
    return {
        value: value,
        type: type,
    };
}