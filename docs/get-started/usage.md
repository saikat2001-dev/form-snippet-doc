---
sidebar_position: 3
---

# Usage

Learn how to integrate `form-snippet` components into your React application.

## Basic Usage

The core of Form Snippet is the `FormWrapper`. All form components should be wrapped inside it to participate in the form state management.

The `onSubmit` function of `FormWrapper` provides a `data` parameter containing all current form values.

```jsx
import React from "react";
import { FormWrapper, Input, Button } from "form-snippet";

function MyForm() {
  const handleSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input name={"fName"} label={"First Name"} />
      <Button variant={"contained"}>Save</Button>
    </FormWrapper>
  );
}

export default MyForm;
```
