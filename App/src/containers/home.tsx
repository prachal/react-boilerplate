import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { push } from "react-router-redux";
import { PageHeader } from "../components";

type Style = React.CSSProperties;

type Props = {};
type DispatchProps = {
    navigate: (link: string) => void;
}

export class Home extends React.Component<Props & DispatchProps, undefined> {
    public render(): JSX.Element {
        return (
            <div>
                <PageHeader title="Home Page" />
                <div className="well">
                    <div className="container-fluid">
                        <div className="row">
                            Home page comes here
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const HomeContainer = connect(
    (): Props => ({}),
    (dispatch: Dispatch<{}>): DispatchProps => ({
        navigate: (path: string) => dispatch(push(path)),
    })
)(Home);