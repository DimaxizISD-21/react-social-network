import s from './MyPosts.module.css';
import Post from './Post/Post';
import {createRef, useRef} from "react";

const MyPosts = ({ postData, addPost, newPostText, updateNewPostText }) => {
  const newPostElement = useRef();

  const onAddingPost = () => {
    addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} value={newPostText} ref={newPostElement} />
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

export default MyPosts;