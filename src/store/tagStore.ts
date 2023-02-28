import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';
const dataSource = [
  {id: 1, name: '衣'},
  {id: 2, name: '食'},
  {id: 3, name: '住'},
  {id: 4, name: '行'}
];

const tagStore = {
  tagList: [] as Tag[],
  fetchTag() {
    this.tagList = JSON.parse(localStorage.getItem(localStorageKeyName) || JSON.stringify(dataSource));
    return this.tagList;
  },
  findTag(id: string) {
    return this.tagList.filter(tag => tag.id === id)[0];
  },
  createTag() {
    const tagName: string = window.prompt('请输入标签名：')!.trim();
    if (tagName === '') {
      window.alert('标签名不能为空');
    } else {
      const names = this.tagList.map(tag => tag.name);
      if (names.indexOf(tagName) >= 0) {
        window.alert('标签名重复，添加失败');
      } else {
        const newTagList: Tag[] = JSON.parse(JSON.stringify(this.tagList));
        newTagList.push({id: createId().toString(), name: tagName});
        this.tagList = newTagList;
        tagStore.save(this.tagList);
        window.alert('创建成功');
        return this.tagList;
      }
    }
  },
  removeTag(id: string) {
    const tag = this.tagList.filter(tag => tag.id === id)[0];
    const index = this.tagList.indexOf(tag);
    if (index === -1) {
      return false;
    } else {
      this.tagList.splice(index, 1);
      tagStore.save(this.tagList);
      return true;
    }
  },
  updateTag(id: string, name: string) {
    const idList = this.tagList.map(tag => tag.id);
    if (idList.indexOf(id) >= 0) {
      const tags = this.tagList.filter(tag => tag.id === id)[0];
      tags.name = name;
      tagStore.save(this.tagList);
      window.alert('修改成功');
      return 'success';
    } else {
      window.alert('找不到该标签');
      return 'not found';
    }
  },
  save(data: Tag[]) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

tagStore.fetchTag();
export default tagStore;