interface RecordItem {
  tags: string[],
  note: string,
  type: string,
  account: number,
  createAt?: Date
}

interface Tag {
  id: string,
  name: string
}

interface TagListModel {
  data: Tag[],
  fetch: () => Tag[];
  create: (data: string) => 'duplicated' | Tag[];
  update: (id: string, name: string) => 'duplicated' | 'success' | 'not found',
  remove: (id: string) => boolean,
  save: (data: Tag[]) => void;
}