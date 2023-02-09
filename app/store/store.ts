import {action, observable} from 'mobx';
import {IPost} from '../models/IPost';

class Store {
  @observable
  Posts: IPost[] = [];

  //   @computed
  //   get delayMessage = () => {
  //     return 'The train is delayed by' + this.count;
  //   };

  @action
  addPost = (post: IPost) => {
    console.log(post)
    this.Posts.push(post);
  };
  @action
  removeSpecificPost = (post: IPost) => {
    const index = this.Posts.findIndex(item => item.id === post.id);
    this.Posts.splice(index, 1);
  };
}

export default new Store();
