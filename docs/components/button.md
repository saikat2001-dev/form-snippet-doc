---
sidebar_position: 3
---

# Button

The `Button` component is used to trigger actions, such as submitting a form.

## Basic Usage

```jsx
<Button variant={"contained"} size={"medium"} color={"primary"}>
  Save
</Button>
```

## Props

| Name        | Type           | Default     | Description                                                  |
| :---------- | :------------- | :---------- | :----------------------------------------------------------- |
| `children`  | `ReactNode`    | -           | The content to display inside the button (e.g., text, icon). |
| `variant`   | `string`       | `contained` | The button style (`contained`, `outlined`, `text`).          |
| `color`     | `string`       | `primary`   | The button color (`primary`, `secondary`, `error`, etc.).    |
| `size`      | `string`       | `medium`    | The size of the button (`small`, `medium`, `large`).         |
| `disabled`  | `boolean`      | `false`     | Whether the button is disabled.                              |
| `startIcon` | `ReactElement` | -           | Icon to display before the text.                             |
| `endIcon`   | `ReactElement` | -           | Icon to display after the text.                              |
| `onClick`   | `Function`     | -           | Callback fired when the button is clicked.                   |
| `sx`        | `object`       | -           | System property for custom styling.                          |
