import Footer from "./Footer";
import Header from "./Header";
import React from "react";

export default function Layout(props) {
  return (
    <div className="flex flex-col bg-slate-200">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
