import Post from './Post/Post';
import { addPost, updateNewPostText } from '../../../redux/actions';
import {connect} from "react-redux";

import s from './MyPosts.module.css';

const MyPosts = ({ postData, newPostText, addPost, updateNewPostText }) => {

  const onAddingPost = () => {
    addPost();
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} value={newPostText} />
          </div>
          <div>
            <button onClick={onAddingPost}>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>
        {
          postData.map((data, i) => (
            <Post key={i} msg={data.msg} likesCount={data.likesCount}/>
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = {
  addPost,
  updateNewPostText
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);