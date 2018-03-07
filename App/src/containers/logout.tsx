import * as React from "react";
import { push } from "react-router-redux";
import { connect, Dispatch } from "react-redux";
import * as loginActions from "../actions/loginActions";

type Props = {};

type DispatchProps = {
    navigateToLogin: () => void;
    logout: () => void;

}
export class Logout extends React.Component<Props & DispatchProps, void> {
    public componentWillMount(): void {
        this.props.logout();
        this.props.navigateToLogin();
    }

    public render(): JSX.Element {
        return (
            <div>
                Logging out
            </div>
        );
    }
}

export const LogoutContainer = connect(
    (): Props => ({}),
    (dispatch: Dispatch<{}>): DispatchProps => ({
        logout: () => dispatch(loginActions.logout()),
        navigateToLogin: () => dispatch(push("/login")),
    })
)(Logout as any);