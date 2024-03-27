---
title: Divider Block
description: >-
  The Divider Block is a block that allows you to create a horizontal line to
  separate content in your email.
---

The Divider Block is a block that allows you to create a horizontal line to separate content in your email. It supports several options to help you customize the appearance of the divider.

## Options

* `border`: An object defining the border of the divider. It uses the [`IBorder`](/guides/references/interfaces#iborder) interface, but without the "radius" property.
* `padding`: An object defining the padding around the divider. It uses the [`IPadding`](/guides/references/interfaces#ipadding) interface.

## Usage

To use the Divider Block in your email, you can create a new instance of the `DividerBlock` class and customize its options. Here's an example:

```typescript
import { DividerBlock } from "@wlocalhost/ngx-email-builder";

new DividerBlock().toObject({
  border: {
    width: 1,
    style: "solid",
    color: "#cccccc"
  },
  padding: {
    top: 20,
    bottom: 20
  }
});
```

In this example, we've customized the `border` and `padding` of the `DividerBlock` to create a thin gray line with 20 pixels of `padding` at the `top` and `bottom`.
