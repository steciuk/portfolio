import type { TimelinableEntry } from "@components/Timeline/types";

export function getEntryBgColorClass(
  entry: Partial<TimelinableEntry> & Pick<TimelinableEntry, "collection">,
): string {
  switch (entry.collection) {
    case "education":
      return "bg-primary";
    case "jobs":
      return "bg-secondary";
    case "projects":
      return "bg-third";
  }
}

export function getEntryTextColorClass(
  entry: Partial<TimelinableEntry> & Pick<TimelinableEntry, "collection">,
): string {
  switch (entry.collection) {
    case "education":
      return "text-primary";
    case "jobs":
      return "text-secondary";
    case "projects":
      return "text-third";
  }
}
