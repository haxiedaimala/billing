import {ref} from 'vue';

const localStorageKeyName = 'recordList';
const recordListModel = {
  fetch() {
    return ref<RecordItem[]>(JSON.parse(localStorage.getItem(localStorageKeyName) || '[]'));
  },
  save(data: RecordItem[]) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default recordListModel;