const localStorageKeyName = 'tagList';
const dataSource = ['衣', '食', '住', '行'];

interface TagListModel {
  fetch: () => string[];
  save: (data: string[]) => void;
}

const tagListModel: TagListModel = {
  fetch() {
    return JSON.parse(localStorage.getItem(localStorageKeyName) || JSON.stringify(dataSource));
  },
  save(data: string[]) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default tagListModel;