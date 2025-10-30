The **CSS `box-sizing` property** controls how the total width and height of an element are calculated.

## Values

**`content-box`** (default)
- Width/height apply only to the content
- Padding and border are added outside
- Example: `width: 200px` + `padding: 20px` + `border: 5px` = 250px total width

**`border-box`** (most common)
- Width/height include content, padding, AND border
- Example: `width: 200px` with any padding/border = always 200px total

## Usage

```css
/* Apply to single element */
.box {
  box-sizing: border-box;
}

/* Apply globally (common practice) */
* {
  box-sizing: border-box;
}
```

## Why Use `border-box`?

- Makes layout calculations predictable
- Easier responsive design
- No math needed when adding padding/borders
- Industry standard in modern CSS

**Bottom line:** Most developers set `box-sizing: border-box` globally because it makes sizing elements much more intuitive.