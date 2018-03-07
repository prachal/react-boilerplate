import * as React from "react";
import { render } from "react-dom";
import { browserHistory } from "react-router";
import { Routes } from "./routes";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import { configureStore } from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/app.css";
import "react-table/react-table.css";

const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

var Main = () => {
    return (
        <Provider store={store}>
            <Routes history={history} />
        </Provider>
    );
}

render(<Main />, document.getElementById("app"));