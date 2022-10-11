import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="detail" element={<Detail />}></Route>
        {/* id값에 따라서 dynamic route 설정 */}
        <Route path="detail/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
