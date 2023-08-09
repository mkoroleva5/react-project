type Mods = Record<string, boolean | string>;

export const classNames = (
  className: string,
  additional: string[],
  mods: Mods
): string => {
  return [
    className,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
