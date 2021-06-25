import s from './MyPosts.module.css';
import Post from './Post/Post';
import {createRef, useRef} from "react";

const MyPosts = ({ postData, dispatch, newPostText }) => {
  const newPostElement = useRef();

  const onAddingPost = () => {
    dispatch({type: 'ADD-POST'});
  };

  const onPostChange = () => {
    let text = newPostElement.current.value
    dispatch({type: 'UPDATE_NEW_POST_TEXT', newText: text});
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