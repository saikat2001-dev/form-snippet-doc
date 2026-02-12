---
sidebar_position: 4
---

# Button Dropdown

A button that reveals a dropdown menu with multiple options when clicked.

## Basic Usage

```jsx
<ButtonDropdown
  options={["Option 1", "Option 2", "Option 3"]}
  sx={{ width: 150 }}
/>
```

## Features

- **Integrated with FormWrapper**: Can be used within a `FormWrapper` to contribute to the form's data.
- **Customizable**: Supports custom styling via the `sx` prop.
- **Multiple Options**: Easily define a list of options for the user to select from.

## Props

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `options` | `string[]` | **required** | An array of strings representing the options in the dropdown. |
| `label` | `string` | - | Label for the dropdown button. |
| `sx` | `object` | - | System property for custom styling. |
| `onChange` | `Function` | - | Callback fired when an option is selected. |
