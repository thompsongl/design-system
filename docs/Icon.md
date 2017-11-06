
# `<Icon />`

Use the `<Icon />` component for SVG icons.

```jsx
<Icon
  name='circlePlus'
  size={48}
  color='blue'
/>
```

By default, the Icon component will look for an icon based on its name,
first in the new icon set, then for a fallback in the legacy icon set.

To force the component to prefer the old icon set, use the `legacy` prop on the ThemeProvider.

```jsx
<ThemeProvider legacy>
  <Icon name='chevronDown' />
</ThemeProvider>
```

Prop | Type | Description
---|---|---
name | string | icon key name
size | number | width and height in pixels
color | string | a color key from `theme.colors`

