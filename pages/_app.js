import ProtectedRoute from "./components/protectedRoute";
import { Provider } from "react-redux";
import { store } from "/redux/store/store";
import React, { useEffect } from "react";
import "./globals.css";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
 useEffect(() => {
   if ("serviceWorker" in navigator) {
     window.addEventListener("load", () => {
       navigator.serviceWorker.register("/sw.js").then((registration) => {
         registration.onupdatefound = () => {
           const installingWorker = registration.installing;
           installingWorker.onstatechange = () => {
             if (installingWorker.state === "installed") {
               if (navigator.serviceWorker.controller) {
                 // New update available
                 if (confirm("New version available. Refresh now?")) {
                   window.location.reload();
                 }
               }
             }
           };
         };
       });
     });
   }
 }, [router]);

  return (
    <Provider store={store}>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </Provider>
  );
}
