const localStorageKeyName = 'tagList';
const dataSource = ['衣', '食', '住', '行'];

interface TagListModel {
  data: string[],
  fetch: () => string[];
  create: (data: string) => string[];
  save: (data: string[]) => void;
}

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || JSON.stringify(dataSource));
    return this.data;
  },
  create(tagName: string) {
    const newTagList = JSON.parse(JSON.stringify(this.data));
    newTagList.push(tagName);
    this.data = newTagList;
    return this.data;
  },
  save(data: string[]) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default tagListModel;