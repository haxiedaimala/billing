const localStorageKeyName = 'tagList';
const dataSource = [
  {
    id: '衣',
    name: '衣',
  },
  {
    id: '食',
    name: '食',
  },
  {
    id: '住',
    name: '住'
  },
  {
    id: '行', name: '行'
  }
];

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || JSON.stringify(dataSource));
    return this.data;
  },
  create(tagName: string) {
    const names = this.data.map(tag => tag.name);
    if (names.indexOf(tagName) >= 0) {
      return 'duplicated';
    }
    const newTagList: Tag[] = JSON.parse(JSON.stringify(this.data));
    newTagList.push({id: tagName, name: tagName});
    this.data = newTagList;
    return this.data;
  },
  save(data: Tag[]) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default tagListModel;