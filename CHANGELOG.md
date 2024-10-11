# Changelog

All notable changes to the Yumma CSS Intellisense will be documented in this file.

## [0.1.0]

### Added

- Add color decoration in color utility completions

### Changed

- `classHelper.ts`: new `unit`, `excludeZero`, `incrementName`, `incrementPrefix` and `round` `generateClass()` function properties
- fix all color utilities returning `https://www.yummacss.com/docs/background-color/` in hover providers and code completions.
- rename `/utilities` to `/helpers`
- rename `classUtil.ts` to `classHelper.ts`
- rename `shadeUtil.ts` to `colorHelper.ts`
- split the `utilities.ts` file into: `borders.ts`, `box-models.ts`, `effects.ts`, `filters.ts`, `flexbox.ts`, `grid.ts`, `interactions.ts`, `layouts.ts`, `outlines.ts` and `tables.ts` files
- utility class syntax fixes (Yumma CSS v2.1)

### Removed
- delete `utilities.ts`