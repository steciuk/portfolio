import type { TimelinableEntry } from "@components/Timeline/types";

export function getEntryBgColorClass(
  entry: Partial<TimelinableEntry> & Pick<TimelinableEntry, "collection">,
): string {
  switch (entry.collection) {
    case "education":
      return "bg-secondary";
    case "jobs":
      return "bg-primary";
    case "projects":
      return "bg-accent";
  }
}
