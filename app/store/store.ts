import {makeAutoObservable} from 'mobx';
import {IPost} from '../models/IPost';

class Store {
  Posts: IPost[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  addPost = (post: IPost) => {
    this.Posts.push(post);
  };
  removeSpecificPost = (post: IPost) => {
    const index = this.Posts.findIndex(item => item.id === post.id);
    this.Posts.splice(index, 1);
  };
}

export default new Store();
