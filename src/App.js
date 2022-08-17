import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PersonalityTest from "./pages/PersonalityTest";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Landing />}/>
        <Route  path="/result" element={<Results />}/>
        <Route  path="/personality-test" element={<PersonalityTest />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
