import { Link } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, [className])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
          Home
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
