import type { TimelineableCollection } from "@components/Timeline/types";

export function getEntryAssociatedColor(collection: TimelineableCollection) {
  switch (collection) {
    case "education":
      return {
        bgClass: "bg-secondary",
        textClass: "text-secondary",
        cssVarName: "--secondary",
        highlightCssVarName: "--secondary-highlight",
        selectedCssVarName: "--secondary-selected",
      };
    case "jobs":
      return {
        bgClass: "bg-primary",
        textClass: "text-primary",
        cssVarName: "--primary",
        highlightCssVarName: "--primary-highlight",
        selectedCssVarName: "--primary-selected",
      };
    case "projects":
      return {
        bgClass: "bg-accent",
        textClass: "text-accent",
        cssVarName: "--accent",
        highlightCssVarName: "--accent-highlight",
        selectedCssVarName: "--accent-selected",
      };
  }
}
