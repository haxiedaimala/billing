import tagListModel from '@/model/tagListModel';

export default {
  tagList: tagListModel.fetch(),
  fetchTag: tagListModel.fetch,
  findTag(id: string) {
    return this.tagList.filter(tag => tag.id === id)[0];
  },
  createTag() {
    const tagName: string = window.prompt('请输入标签名：')!.trim();
    if (tagName === '') {
      window.alert('标签名不能为空');
    } else {
      const message = tagListModel.create(tagName);
      if (message === 'duplicated') {
        window.alert('标签名重复，添加失败');
      } else {
        tagListModel.save(message);
        window.alert('创建成功');
        return message;
      }
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    const message = tagListModel.update(id, name);
    if (message === 'not found') return window.alert('找不到该标签');
    if (message === 'success') return window.alert('修改成功');
  }
};