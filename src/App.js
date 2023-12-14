import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import Warning from "./pages/Warning";
import Questions from "./pages/Questions";
import AuthProvider from "./AppContext/auth.js";

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Warning />} />
            <Route path="/questions" element={<Questions />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
