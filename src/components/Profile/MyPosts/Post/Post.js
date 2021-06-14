import s from './Post.module.css';

const Post = ({ msg, likesCount }) => {
    return (
        <div className={s.item}>
            <img className={s.post_img} src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png' alt='img' />
            {msg}
            <div>
                <span>Like</span> {likesCount}
            </div>
        </div>
    );
}
 
export default Post;