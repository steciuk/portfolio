import { type VariantProps, tv } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import Root from "./button.svelte";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary-highlight",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-link underline-offset-4 hover:underline",
      shadow:
        "bg-background hover:bg-background-tint hover:text-foreground shadow",
    },
    size: {
      default: "text-sm h-10 px-4 py-2",
      sm: "text-sm h-9 px-3",
      lg: "text-base h-11 px-8",
      icon: "text-sm h-10 w-10",
      inline: "inline h-auto p-0 p-0 m-0 whitespace-normal",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
  variant?: Variant;
  size?: Size;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

type Events = ButtonPrimitive.Events;

export {
  Root,
  type Props,
  type Events,
  //
  Root as Button,
  type Props as ButtonProps,
  type Events as ButtonEvents,
  buttonVariants,
};
