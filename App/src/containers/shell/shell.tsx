import * as React from "react";
import { connect } from "react-redux";
import { Account, Entity, State } from "../../models";
import { Header } from "../../components";

type Props = {
    account: Entity<Account>;
};

type DispatchProps = {};

export class Shell extends React.Component<Props & DispatchProps, undefined> {
    public render(): JSX.Element {
        const { isInitialized, data } = this.props.account;
        return (
            <div>
                <Header isAuthenticated={isInitialized} userName={data.email} />
                <div className="container body-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export const ShellContainer = connect(
    (state: State): Props => ({
        account: state.account,
    }),
    (): DispatchProps => ({}),
)(Shell);