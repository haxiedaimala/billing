import {createStore} from 'vuex';
import createId from '@/lib/createId';

const store = createStore({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
    createTagError: null as Error | null,
    updateTagError: null as Error | null,
    removeTagError: null as Error | null,
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
      const names = state.tagList.map(tag => tag.name);
      if (names.indexOf(name) >= 0) {
        state.createTagError = new Error('tag name duplicated');
      } else {
        state.tagList.push({id: createId(), name: name});
        store.commit('saveTag');
        state.createTagError = null;
      }
    },
    updateTag(state, obj: { id: number, name: string }) {
      const {id, name} = obj;
      const idList = state.tagList.map(tag => tag.id);
      if (idList.indexOf(id) >= 0) {
        const tags = state.tagList.filter(tag => tag.id === id)[0];
        tags.name = name;
        store.commit('saveTag');
        state.updateTagError = null;
      } else {
        state.updateTagError = new Error('tag name is not found');
      }
    },
    removeTag(state, id: number) {
      const tag = state.tagList.filter(tag => tag.id === id)[0];
      const index = state.tagList.indexOf(tag);
      if (index === -1) {
        state.removeTagError = new Error('tag name is not found');
      } else {
        state.tagList.splice(index, 1);
        store.commit('saveTag', this.tagList);
        state.removeTagError = null;
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

