import {rerender} from "./render";

const state = {
  profilePage: {
    posts: [
      {id: 1, msg: 'Hi, how are you?', likesCount: 12},
      {id: 2, msg: 'It`s my first post', likesCount: 9}
    ],
    newPostText: 'Something',
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Katya', avatar: 'https://peopletalk.ru/userfiles/images/%D0%B2%20%D0%BA%D1%80%D1%83%D0%B6%D0%BE%D1%87%D0%BA%D0%B5.jpg'},
      {id: 2, name: 'Alex', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfA393EVfvQ4aAMdzb2zC8JN7JfSxdOrm-jj6aqUhuHEJyqi1b7vH-X6kExlgbHdqNv7E&usqp=CAU'},
      {id: 3, name: 'Nastya', avatar: 'https://peopletalk.ru/userfiles/images/%D0%B2%20%D0%BA%D1%80%D1%83%D0%B6%D0%BE%D1%87%D0%BA%D0%B5%284%29%281%29.jpg'}
    ],
    messages: [
      {id: 1, msg: 'Hi'},
      {id: 2, msg: 'How are you?'},
      {id: 3, msg: 'I`m fine thanks!'},
      {id: 4, msg: 'How is your day?'},
    ]
  },
  sidebarFriends: [
    {id: 1, name: 'Katya', avatar: 'https://peopletalk.ru/userfiles/images/%D0%B2%20%D0%BA%D1%80%D1%83%D0%B6%D0%BE%D1%87%D0%BA%D0%B5.jpg'},
    {id: 2, name: 'Alex', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfA393EVfvQ4aAMdzb2zC8JN7JfSxdOrm-jj6aqUhuHEJyqi1b7vH-X6kExlgbHdqNv7E&usqp=CAU'},
    {id: 3, name: 'Nastya', avatar: 'https://peopletalk.ru/userfiles/images/%D0%B2%20%D0%BA%D1%80%D1%83%D0%B6%D0%BE%D1%87%D0%BA%D0%B5%284%29%281%29.jpg'}
  ]
};

export const addPost = () => {
  const newPost = {
    id: 3,
    msg: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerender(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerender(state);
};

export default state;