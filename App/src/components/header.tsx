import * as React from "react";
import { Link } from "react-router";

type Props = {
    isAuthenticated: boolean;
    userName: string;
}

const UnauthenticatedNavRight = () => {
    const glyphiconMargin: React.CSSProperties = {
        marginRight: "6px",
    };

    return (
        <li>
            <Link to="/login">
                <span className="glyphicon glyphicon-log-in" style={glyphiconMargin}></span>Login
                </Link>
        </li>
    )
}

const AuthenticatedNavRight = (props: { userName: string }) => {
    return (
        <li>
            <Link to="/logout">
                {props.userName} (Logout)
            </Link>
        </li>
    );
}

export const Header = (props: Props) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">App Name</Link>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {props.isAuthenticated && <AuthenticatedNavRight userName={props.userName} />}
                        {!props.isAuthenticated && <UnauthenticatedNavRight />}
                    </ul>
                </div>
            </div>
        </nav>
    );
}