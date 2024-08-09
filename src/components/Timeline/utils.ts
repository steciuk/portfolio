import type { TimelineableCollection } from "@components/Timeline/types";

export function getEntryAssociatedColor(collection: TimelineableCollection) {
  switch (collection) {
    case "education":
      return {
        bgClass: "bg-secondary",
        textClass: "text-secondary",
        cssVarName: "--secondary",
        hoverClass: "hover:bg-secondary-highlight",
      };
    case "jobs":
      return {
        bgClass: "bg-primary",
        textClass: "text-primary",
        cssVarName: "--primary",
        hoverClass: "hover:bg-primary-highlight",
      };
    case "projects":
      return {
        bgClass: "bg-accent",
        textClass: "text-accent",
        cssVarName: "--accent",
        hoverClass: "hover:bg-accent-highlight",
      };
  }
}
