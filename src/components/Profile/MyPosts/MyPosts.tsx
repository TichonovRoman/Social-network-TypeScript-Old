import React from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts: React.FC = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message = "Hi, how are yuo?"/>
                <Post message = "It`s my first post"/>
            </div>
        </div>
    )
        ;
};

export default MyPosts;