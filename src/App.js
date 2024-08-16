import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// using React.createElement;
// const heading1 = React.createElement(

//   "h1",
//   {
//     id: "title",
//   },
//   "learning React"
// );

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//   },
//   "heading 2"
// );

// const heading3 = React.createElement(
//   "h3",
//   {
//     id: "title",
//   },

//   "heading3"
// );

// const container = React.createElement(
//   "ul",
//   {
//     id: "container",

//     style: {
//       backgroundColor: "blue",
//     },
//   },

//   [
//     React.createElement("ul", {}, "About US"),
//     React.createElement("li", {}, "Support"),
//   ]
// );

// config driven ui

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />

      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
