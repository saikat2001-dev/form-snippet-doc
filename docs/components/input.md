---
sidebar_position: 2
---

# Input

The `Input` component provides a standard text field for user input, integrated with the form state.

## Basic Usage

```jsx
<Input name={"fName"} label={"First Name"} />
```

## Props

| Name        | Type       | Default      | Description                                                        |
| :---------- | :--------- | :----------- | :----------------------------------------------------------------- |
| `name`      | `string`   | **required** | The unique identifier for this field in the form data object.      |
| `label`     | `string`   | -            | The label displayed above or inside the input field.               |
| `type`      | `string`   | `text`       | The type of input (e.g., `text`, `password`, `email`, `date`).     |
| `variant`   | `string`   | `outlined`   | The visual style of the input (`outlined`, `standard`, `filled`).  |
| `size`      | `string`   | `small`      | The size of the input (`small`, `medium`).                         |
| `disabled`  | `boolean`  | `false`      | Whether the input is disabled.                                     |
| `readOnly`  | `boolean`  | `false`      | Whether the input is read-only.                                    |
| `minLength` | `number`   | `0`          | Minimum number of characters allowed.                              |
| `maxLength` | `number`   | `150`        | Maximum number of characters allowed.                              |
| `fullWidth` | `boolean`  | `false`      | If `true`, the input will take up the full width of its container. |
| `required`  | `boolean`  | `false`      | Marks the field as required for validation.                        |
| `sx`        | `object`   | -            | System property for custom styling.                                |
| `onChange`  | `Function` | -            | Callback fired when the value changes.                             |
