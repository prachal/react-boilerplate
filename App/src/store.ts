import { createStore, applyMiddleware, Store, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware } from "react-router-redux";
import { History } from "history";
import { reducer as formReducer } from "redux-form";
import ReduxThunk from 'redux-thunk'
import { accountReducer } from "./reducers/accountReducer";

export function configureStore(initialState: {}, history: History) {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    var middleware = applyMiddleware(...[
        routerMiddleware(history),
        ReduxThunk
    ])

    const enhancers = composeEnhancers(middleware);


    const rootReducer = combineReducers({
        routing: routerReducer,
        form: formReducer,
        account: accountReducer,
    })

    return createStore(rootReducer, initialState, enhancers);
}