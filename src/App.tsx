import { Box } from "@mui/material";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";

import MetaWeather from "./pages/MetaWeather.page";

function App() {
  return (
    <Box className="app">
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path="weather/:woeid" element={<MetaWeather />} />
        </Routes>
        <Footer />
      </Suspense>
    </Box>
  );
}

export default App;
