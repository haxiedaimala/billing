import {createStore} from 'vuex';
import createId from '@/lib/createId';

const dataSource = [
  {id: -1, name: '衣'},
  {id: -2, name: '食'},
  {id: -3, name: '住'},
  {id: -4, name: '行'}
];
const store = createStore({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  getters: {
    findTag(state, id: number) {
      return state.tagList.filter(tag => tag.id === id)[0];
    },

  },
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
      state.tagList = JSON.parse(localStorage.getItem('tagList') || JSON.stringify(dataSource));
      return state.tagList;
    },

    createTag(state) {
      const tagName: string = window.prompt('请输入标签名：')!;
      if (tagName === '') {
        window.alert('标签名不能为空');
      } else if (tagName === null) {
        return;
      } else {
        const names = state.tagList.map(tag => tag.name);
        if (names.indexOf(tagName) >= 0) {
          window.alert('标签名重复，添加失败');
        } else {
          state.tagList.push({id: createId(), name: tagName});
          store.commit('saveTag');
          window.alert('创建成功');
        }
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
        return 'success';
      } else {
        window.alert('找不到该标签');
        return 'not found';
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

