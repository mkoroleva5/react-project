import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { classNames } from "shared/lib/classNames/classNames";
import "app/styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
