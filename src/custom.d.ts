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
