export function getEntryId(entry: { collection: string; id: string }): string {
  return `${entry.collection}_${entry.id}`;
}

export function getEntryDetailsElementId(entry: {
  collection: string;
  id: string;
}): string {
  return `entry-details-${getEntryId(entry)}`;
}
