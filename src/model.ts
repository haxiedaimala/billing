import {computed} from 'vue';

const localStorageKeyName = 'recordList';
const model = {
  fetch() {
    return computed<RecordItem[]>(() => JSON.parse(localStorage.getItem(localStorageKeyName) || '[]'));
  },
  save(data: RecordItem[]) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default model;