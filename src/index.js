import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RouterView from "@components/RouterView";
import store from "@store";
import "@/style/reset.scss";
import "@/style/common.scss";
import "@/style/lib/font-awesome/css/font-awesome.min.css";
import * as serviceWorker from "./serviceWorker";



const Root = document.getElementById("root");

const App = _ => {
  return (
    <Provider store={store}>
      <RouterView />
    </Provider>
  );
};

ReactDOM.render(<App />, Root);

serviceWorker.unregister();
