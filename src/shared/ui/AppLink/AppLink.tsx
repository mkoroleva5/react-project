import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...rest
}) => (
  <Link
    to={to}
    className={classNames(styles.link, [className, styles[theme]])}
    {...rest}
  >
    {children}
  </Link>
);
