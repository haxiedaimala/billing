let id: number = parseInt(localStorage.getItem('_idMax') || '0') || 0;
export default function createId() {
  id++;
  localStorage.setItem('_idMax', id.toString());
  return id;
}