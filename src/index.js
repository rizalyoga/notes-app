import React from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./components/main_page/MainPage";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<MainPage />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
