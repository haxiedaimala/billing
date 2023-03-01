import {useStore} from 'vuex';

const map: { [key: string]: string } = {
  'tag name duplicated': '标签名重复，添加失败'
};

export function createTag() {
  const store = useStore();

  const create = () => {
    const tagName: string = window.prompt('请输入标签名：')!;
    if (tagName === '') return window.alert('标签名不能为空');
    if (tagName === null) return;
    store.commit('createTag', tagName);
    if (store.state.createTagError) {
      window.alert(map[store.state.createTagError.message]);
    } else {
      window.alert('添加标签成功');
    }
  };
  return {create};
}