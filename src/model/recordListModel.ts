const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(data: RecordItem) {
    this.data.push(data);
    this.save();
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default recordListModel;