---
sidebar_position: 1
---

# Form Wrapper

The `FormWrapper` is a crucial component that manages the state and submission of all form elements within it.

## Basic Usage

Wrap your input components and buttons inside the `FormWrapper`.

```jsx
<FormWrapper onSubmit={handleSubmit}>
  <Input name={"fName"} label={"First Name"} />
</FormWrapper>
```

## Props

| Name       | Type        | Default      | Description                                                                                             |
| :--------- | :---------- | :----------- | :------------------------------------------------------------------------------------------------------ |
| `children` | `ReactNode` | **required** | The content of the form, typically including input components and a submit button.                      |
| `onSubmit` | `Function`  | **required** | The function called when the form is submitted. It receives the form data object as its first argument. |
| `sx`       | `object`    | -            | System property for custom styling.                                                                     |
