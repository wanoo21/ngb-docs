---
title: Custom block
description: How to create a custom email template builder block.
sidebar:
  order: 3
---

Creating a new block in our template builder is pretty straightforward. In this documentation, you'll find a step-by-step guide on how to create your custom block.&#x20;

Before we dive in, make sure you have access to the source code of the [builder converter](https://github.com/wanoo21/Angular-mjml-output); otherwise, you won't be able to add your custom block to it.

In this example, we'll create a custom HTML block, define it in the builder, and drag and drop it into the email body.

## Step 1. Generate the block component

You can generate the block component inside the template you bought or at the application level; it's not an issue. However, we recommend having all your blocks inside the builder's template folder.

Let's open the console and generate a new block under `src/lib/blocks` using [Angular CLI](https://yon.fun/angular-cli/).

```bash
ng g c myHtmlBlock --display-block --change-detection=OnPush
```

Cool, now let's go to the second step.

## Step 2. Define the component as an email builder block

Before marking this component as a block, let's create an empty interface that will contain the block's options.

```typescript
export interface MyHTMLBlockOptions {}
```

Great! Now that we have the component and its options interface, let's convert it to a builder block.

```typescript
@Component({...})
export class MyHtmlBlockComponent extends AIPEmailBuilderBlock<MyHTMLBlockOptions> {
}
```

[AIPEmailBuilderBlock](/guides/blocks/aipemailbuilderblock) is a base class for implementing email blocks in the email builder application.

The class has [lifecycle hooks](https://yon.fun/angular-lifecycle-hooks/) for initializing, cleaning up resources, listening to changes in the block, and updating its properties accordingly.

Now it's time to add some options to our interface. Let's assume we want to add just the padding.

```typescript
export interface MyHTMLBlockOptions {
  padding: IPadding;
}
```

[IPadding](/guides/references/interfaces#ipadding) is a `@wlocalhost/ngx-email-builder` interface, see [this page for all interfaces provided by the builder](/guides/references/interfaces).

And this is our updated component.

```typescript
@Component({...})
export class MyHtmlBlockComponent extends AIPEmailBuilderBlock<MyHTMLBlockOptions> {
  override type = "my-html-block";
  
  // Default options for the block
  options: MyHTMLBlockOptions = {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  };

  // Add padding styles to host
  get hostStyles(): TIPEmailBuilderStyles {
    const { padding } = this.options;
    return {
      padding: createPadding(padding)
    };
  }
}
```

`createPadding` function is also part of `@wlocalhost/ngx-email-builder`. See [this page for the full list of all utils functions](/guides/references/utility).

Now you can say you already have a custom block, but we are not done yet :sunglasses:.

It's time to make the builder **see** it.

## Step 3. Add the block to the builder module

