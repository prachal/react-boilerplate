import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { getAccount } from "../../actions/accountActions";
import { push } from "react-router-redux";
import { Entity, Account, State } from "../../models";
import { LoadingBar } from "../../components";

type Props = {
    account: Entity<Account>
};
type DispatchProps = {
    getAccount: () => Promise<void>;
    navigateToLogin: () => void;
}

class AuthenticatedShell extends React.Component<Props & DispatchProps, void> {
    public componentWillMount(): void {
        this.props.getAccount().catch(() => {
            this.props.navigateToLogin();
        });
    }

    public render(): JSX.Element {
        if (this.props.account.isLoading) {
            return <LoadingBar />
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export const AuthenticatedShellContainer = connect(
    (state: State): Props => ({
        account: state.account,
    }),
    (dispatch: Dispatch<{}>): DispatchProps => ({
        getAccount: () => dispatch(getAccount()),
        navigateToLogin: () => dispatch(push("/login")),
    }),
)(AuthenticatedShell as any);