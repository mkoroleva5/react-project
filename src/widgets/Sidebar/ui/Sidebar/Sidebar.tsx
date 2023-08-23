import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, [className], {
        [styles.collapsed]: collapsed,
      })}
    >
      <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        123
      </Button>
      <div
        className={classNames(styles.switchers, [], {
          [styles.switchersCollapsed]: collapsed,
        })}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
