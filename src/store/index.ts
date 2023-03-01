import {createStore} from 'vuex';
import createId from '@/lib/createId';

const store = createStore({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  getters: {},
  mutations: {
    fetchRecord(state) {
      state.recordList = JSON.parse(localStorage.getItem('recordList') || '[]');
    },
    createRecord(state, record: RecordItem) {
      state.recordList.push(record);
      store.commit('saveRecord');
    },
    saveRecord(state) {
      localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },


    fetchTag(state) {
      state.tagList = JSON.parse(localStorage.getItem('tagList') || '[]');
      if (state.tagList.length === 0) {
        store.commit('createTag', '衣');
        store.commit('createTag', '食');
        store.commit('createTag', '住');
        store.commit('createTag', '行');
      }
    },
    createTag(state, name: string) {
      const names = store.state.tagList.map(tag => tag.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复，添加失败');
      } else {
        state.tagList.push({id: createId(), name: name});
        store.commit('saveTag');
        window.alert('已保存');
      }
    },
    updateTag(state, obj: { id: number, name: string }) {
      const {id, name} = obj;
      const idList = state.tagList.map(tag => tag.id);
      if (idList.indexOf(id) >= 0) {
        const tags = state.tagList.filter(tag => tag.id === id)[0];
        tags.name = name;
        store.commit('saveTag');
        window.alert('修改成功');
      } else {
        window.alert('找不到该标签');
      }
    },
    removeTag(state, obj: { id: number, resolve: () => void, reject: () => void }) {
      const {id, resolve, reject} = obj;
      const tag = state.tagList.filter(tag => tag.id === id)[0];
      const index = state.tagList.indexOf(tag);
      if (index === -1) {
        reject();
      } else {
        state.tagList.splice(index, 1);
        store.commit('saveTag', this.tagList);
        resolve();
      }
    },
    saveTag(state) {
      localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  },
  actions: {},
  modules: {}
});

store.commit('fetchTag');
store.commit('fetchRecord');
export default store;

