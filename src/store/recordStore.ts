const localStorageKeyName = 'recordList';
let data: RecordItem[] = [];

const recordStore = {
  recordList: data,
  fetchRecord() {
    data = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]');
    return data;
  },
  createRecord(record: RecordItem) {
    data.push(record);
    this.save();
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
recordStore.fetchRecord();
export default recordStore;