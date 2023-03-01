import {useStore} from 'vuex';

export function createTag() {
  const store = useStore();

  const create = () => {
    const tagName: string = window.prompt('请输入标签名：')!;
    if (tagName === '') return window.alert('标签名不能为空');
    if (tagName === null) return;
    store.commit('createTag', tagName);
  };
  return {create};
}