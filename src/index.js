import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./ducks/reducers";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: "AIzaSyAtKxPuMkhX5_gUxWOLK1eppFiTgwOMZ3w",
  authDomain: "vd-1-59e53.firebaseapp.com",
  databaseURL: "https://vd-1-59e53.firebaseio.com",
  projectId: "vd-1-59e53",
  storageBucket: "vd-1-59e53.appspot.com",
  messagingSenderId: "61589958525",
  appId: "1:61589958525:web:a26559d44d08c003d2e614",
  measurementId: "G-1MVLMTY1J6"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
