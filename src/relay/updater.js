
export const append = (root, name, item) => {
  const list = root.getLinkedRecords(name) || [];
  root.setLinkedRecords([...list, item], name);
}
