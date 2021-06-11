<p align="center">
  <a href="https://curiousprogrammer.dev">
    <img alt="Curious Programmer" src="./cp-ti-banner.jpg" width="500" />
  </a>
</p>
<div align="center">
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" />
  </a>
</div>

## Theming

A light and dark theme is available. A base color palette is defined and colors get adjusted per category according to preference.

* Getting an attribute for a theme requires 3 keys:

* There are primary categories called `TOP_LEVEL_KEY`'s that house a group of colors for the theme. Examples being palette, link and card.
If you have a new element you wish to add then create a new key for it.
**Remember to reference the key in the TOP_LEVEL_KEY enumerator.**
**Place the key and its config in both themes.**

* Each top level key consists of `NESTED_KEY`'s. These keys are
sub-categories to the top levels. Categories like primary, secondary and
tertiary are examples of sub-categories of a palette. Body, page, footer, code and hero all form part of root.

 Essentially we consider root to be a thing that has a body, page and footer that needs to be themed.

* The final attribute is the `KEY` which defines the
  - base: default/primary color of the thing, usually considered the background color.
  - color: anything foreground related or a color that can be put on top of the base.
  - shadow: a complimentary shadow color.

To get a particular color from the theme you would rely on the `getFromTheme` function. To get the background color, color and shadow
pre-configured for you, you can use `getAllFromTheme`.

## Resources

- [Image: Pixers&reg; - 3d Periodic Table](https://pngio.com/images/png-a2159734.html)
