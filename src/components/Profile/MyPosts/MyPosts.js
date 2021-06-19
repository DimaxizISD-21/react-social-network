import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postData }) => {
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