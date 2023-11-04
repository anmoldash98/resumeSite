import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { inject } from '@vercel/analytics';


function App() {
  return (
    <div>
      <Main />
    </div>
  );
}
inject();
export default App;
