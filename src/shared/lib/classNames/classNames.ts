type Mods = Record<string, boolean | string>;

export const classNames = (
  className: string,
  additional: string[] = [],
  mods: Mods = {},
): string =>
  [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
