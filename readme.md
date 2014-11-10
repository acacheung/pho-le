# RubyGems Styles

Rubygems Styles are styles for the [http://rubygems.org](http://rubygems.org) website.
Information about the rubygems site including contribution guidelines can be found on their github repo [https://github.com/rubygems/rubygems.org](https://github.com/rubygems/rubygems.org)


# Getting the App running

**Clone the repo** and get into the project directory:

```
$ git clone https://github.com/dockyard/rubygems.git
$ cd rubygems/
$ rackup
```

The app should now be running at [http://localhost:9292](http://localhost:9292)

**Note**: you should be using ruby version 2.1.x in the project directory


# Conventions

## SCSS

The stylesheets are written in SCSS. This allows developers to use all the features of Sass (variables, extensions, mixins, etc.) and keep a syntax familiar to those who don't know Sass syntax. Complete Sass documentation, including how to install and set up a Sass precompiler on your local machine, can be found on the [Sass website](http://sass-lang.com/documentation/file.SASS_REFERENCE.html).


## General Styles

### px not em

- Use px for font-size, because it offers absolute control over text.
- Unit-less line-height is preferred in most cases because it does not inherit a percentage value of its parent element, but instead is based on a multiplier of the font-size.
- Using pixels on line-height to vertically center text and elements is acceptable.

### White Space
- Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
- Put spaces after `:` in property declarations.
- Put spaces before `{` in rule declarations.
- Put line breaks between rulesets.
- When grouping selectors, keep individual selectors to a single line.
- Place closing braces of declaration blocks on a new line.
- Each declaration should appear on its own line for more accurate error reporting.

### Formatting

- Use hex color codes `#000` unless using `rgba()`.
- Use `//` for comment blocks (instead of `/* */`).
- Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.


## BEM
These styles employ BEM-like naming conventions. BEm (Block Element Modifier) describes a naming convention for organizing CSS and naming classes. BEM gives context through its naming conventions. It follows the pattern `.block__element--modifier`. Harry Roberts describes the methodolgy in this blog post [BEM-like Naming](http://cssguidelin.es/#bem-like-naming). Another excellent primer can be found at [http://csswizardry.com](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

Blocks are higher level components or sections. The bar across the top of a page is a block that might be named `.header`. Elements are descendents of blocks. The nav within a header block would be named `.header__nav`. Modifiers describe the state or the type of elements or blocks. A separate nav for mobile users would be named `.header__nav--is-mobile.` The double underscores and double hyphens in class names delimit elements and modifiers. Two word names are separated by a single hyphen.

`/assets/stylesheets/header.scss` is an example of this convention:

```scss
.header {
  // block for page header
}

.header__logo {
 // element logo inside header
}

.header__logo-wrap {
 // element logo-wrap inside header which wraps the logo element
}

.header__nav-links {
  // nav-links element inside header block
}

.l-wrap--header {
  // block l-wrap with header modifier or l-wrap of type header
}
```

**Note**: These files do not use BEM file structures or other methodologies.


## KSS Styleguide and documentation

Employ KSS documentation. More information can be found at [warspire.com/kss](http://warpspire.com/kss/)

```scss
// Links in the header nav bar.
//
// :hover             - Color fades to translucent white
// .is-active         - Bar underlines nav-link with small triangle
//
// Styleguide 2.1.0.

.header__nav-link {
  ...

  &:hover {
    ...
  }

  &.is-active{
    ...
  }
}
```
**Note**: please read the [KSS documentation](http://warpspire.com/kss/syntax/) for a full description.


## Icons

Uses IcoMoon to generate icons. Upload the svg to get all metadata.


## Other

### Sorting SCSS Properties

To sort CSS declarations use the [Twitter RECESS](https://github.com/twitter/recess/blob/master/lib/lint/strict-property-order.js#L36) sorting convention.
