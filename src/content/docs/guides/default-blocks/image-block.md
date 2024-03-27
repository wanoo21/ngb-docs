---
title: Image Block
description: The Image Block is a block that allows you to display images in your email.
---

The Image Block is a block that allows you to display images in your email. It supports several options to help you
customize the appearance of your image.

## Options

The Image Block supports the following options:

* `border`: The border around the image. It supports the [`IBorder`](/guides/references/interfaces#iborder) interface.
* `width`: The width of the image. It supports the [`IWidthHeight`](/guides/references/interfaces#iwidthheight) interface.
* `height`: The height of the image. It supports the [`IWidthHeight`](/guides/references/interfaces#iwidthheight) interface.
* `link`: The link that the image should link to. It supports the [`ILink`](/guides/references/interfaces#ilink) interface.
* `align`: The alignment of the image. This can be `left`, `center`, or `right`.
* `title`: The title of the image. This is used for accessibility purposes.
* `padding`: The padding around the image. It supports the [`IPadding`](/guides/references/interfaces#ipadding) interface.

## Usage

To use the Image Block in your email, you can create a new instance of the `ImageBlock` class and customize its options.
Here's an example:

```typescript
import {ImageBlock} from "@wlocalhost/ngx-email-builder";

new ImageBlock().toObject({
  border: {
    width: 1,
    color: "#cccccc",
    radius: 4,
    style: "solid"
  },
  width: {
    value: 300,
    unit: "px"
  },
  height: {
    value: 200,
    unit: "px"
  },
  link: {
    url: "https://example.com",
    target: "_blank"
  },
  align: "center",
  title: "Example image",
  padding: {
    top: 10,
    right: 20,
    bottom: 10,
    left: 20
  }
});
```

In this example, we've customized the border, width, height, link, alignment, title, and padding of the Image Block.

{% hint style="info" %}
**Note**: The `src` and `alt` options are required, and the `width` and `height` options should be specified to ensure
that the image is displayed correctly.
{% endhint %}
