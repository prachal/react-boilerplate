import * as React from "react";
import { Router, IndexRoute, Route } from "react-router";
import { History } from "history";
import { HomeContainer } from "./containers/home";
import { ShellContainer } from "./containers/shell/shell";
import { LoginContainer } from "./containers/login";
import { AuthenticatedShellContainer } from "./containers/shell/authenticatedShell";
import { LogoutContainer } from "./containers/logout";

type Props = {
    history: History
}

export const Routes = (props: Props) => {
    return (
        <Router history={props.history}>
            <Route path="/" component={ShellContainer}>
                <Route path="login" component={LoginContainer} />
                <Route path="" component={AuthenticatedShellContainer}>
                    <IndexRoute component={HomeContainer} />
                    <Route path="logout" component={LogoutContainer} />
                </Route>
            </Route>
        </Router>
    );
};