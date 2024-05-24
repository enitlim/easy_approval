import ProtectedRoute from "./components/protectedRoute";
import { Provider } from "react-redux";
import { store } from "/redux/store/store";
import React from "react";
// import "./globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </Provider>
  );
}
