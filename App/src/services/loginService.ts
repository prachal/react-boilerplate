import {post} from "./proxy";

export function login(userName: string, password: string): Promise<string> {
    return post<{access_token: string}>("connect/token", {userName, password}).then((result) => {
        return result.access_token;
    });
}