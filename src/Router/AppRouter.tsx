import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../User/Users";
import NewUser from "../User/NewUser";
import ErrorPage from "../Pages/ErrorPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/users/*" element={<Users />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
