import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>    
            </div>
            <div className={s.posts}>
                <Post msg='Hi, how are you?' likesCount='3' />
                <Post msg='It`s my first post' likesCount='5' />
            </div>
        </>
    );
}
 
export default MyPosts;