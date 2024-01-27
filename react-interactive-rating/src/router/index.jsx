import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RatingMain from "../rating-main";
import RatingResult from "../rating-result";

const AppRouter = () => {
  const [getrate, setGetrate] = useState()
  console.log(getrate)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RatingMain setGetrate={setGetrate}/>} />
        <Route path="/rating" element={<RatingResult getrate={getrate}/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRouter;
