interface RecordItem {
  tags: string[],
  note: string,
  type: string,
  account: number,
  createAt?: string
}

interface Tag {
  id: number,
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