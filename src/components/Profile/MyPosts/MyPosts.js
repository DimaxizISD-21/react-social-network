import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>
        <Post msg='Hi, how are you?' likesCount='3'/>
        <Post msg='It`s my first post' likesCount='5'/>
      </div>
    </div>
  );
}

export default MyPosts;