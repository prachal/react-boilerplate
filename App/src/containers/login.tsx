import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { push } from "react-router-redux";
import * as loginActions from "../actions/loginActions";

type Props = {};
type DispatchProps = {
    login: (username: string, password: string) => Promise<void>;
    navigateToHomePage: () => void;
};

type State = {
    didLoginFail: boolean;
}

export class Login extends React.Component<Props & DispatchProps & InjectedFormProps, State> {
    constructor(props: Props & DispatchProps & InjectedFormProps) {
        super(props);
        this.state = {
            didLoginFail: false,
        }
    }
    public render(): JSX.Element {
        const formStyles: React.CSSProperties = {
            maxWidth: "330px",
            padding: "15px",
            margin: "0 auto",
        };

        const formInputStyles = {
            height: "40px",
        };

        const formButtonStyles = {
            marginTop: "20px",
        };

        return (
            <div>
                <form style={formStyles} method="post">
                    <h2>Login</h2>
                    <div>
                        <label className="sr-only" htmlFor="inputUsername"></label>
                        <Field component="input"
                            id="inputUsername"
                            className="form-control"
                            name="UserName" style={formInputStyles}
                            placeholder="Username"
                            required autoFocus
                            type="text" />
                        <label className="sr-only" htmlFor="inputPassword"></label>
                    </div>
                    <div>
                        <Field component="input"
                            id="inputPassword"
                            className="form-control"
                            name="Password"
                            style={formInputStyles}
                            placeholder="Password"
                            required
                            autoFocus
                            type="password" />
                        <button
                            className="btn btn-lg btn-primary btn-block"
                            type="button"
                            style={formButtonStyles}
                            onClick={this.props.handleSubmit(this.login)}>Sign in</button>
                    </div>
                    {this.state.didLoginFail && <div className="alert alert-danger" style={{ marginTop: "20px" }}>
                        Invalid credentials. Please try again.
                    </div>}
                </form>
            </div>
        );
    }

    private login = (value: { UserName: string, Password: string }) => {
        this.props.login(value.UserName, value.Password).then(() => {
            this.props.navigateToHomePage();
        }).catch((error) => {
            this.setState({ didLoginFail: true });
        })
    }
}

const LoginForm = reduxForm({
    form: "login"
})(Login);

export const LoginContainer = connect(
    (): Props => ({}),
    (dispatch: Dispatch<{}>): DispatchProps => ({
        login: (username: string, password: string) => dispatch(loginActions.login(username, password)),
        navigateToHomePage: () => dispatch(push("/")),
    }),
)(LoginForm as any);