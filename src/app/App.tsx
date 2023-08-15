import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import "app/styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};
