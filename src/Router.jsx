import "./style.css";
import "chart.js/auto";
import { CssBaseline } from "@mui/material";
import { CheckAuth } from "./auth/checkAuth";
import { Routes, Route } from "react-router-dom";
import { LoginKeeper } from "./auth/loginKeeper";
import { Home, Login, Users, Content, NotFound } from "./pages";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route element={<LoginKeeper />}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<CheckAuth />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="content" element={<Content />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
