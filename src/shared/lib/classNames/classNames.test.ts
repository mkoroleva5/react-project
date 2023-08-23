import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('returns right value with only one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('returns right value with additional params', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', ['class1', 'class2'])).toBe(expected);
  });

  test('returns right value with additional params and truthy mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: true,
        scrollable: true,
      }),
    ).toBe(expected);
  });

  test('returns right value with one falsy mod', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: true,
        scrollable: false,
      }),
    ).toBe(expected);
  });

  test('returns right value with one undefined mod', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: true,
        scrollable: undefined,
      }),
    ).toBe(expected);
  });
});
