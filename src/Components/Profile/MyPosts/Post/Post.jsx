import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                < img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_09qNRbJIKFoOmmN9L_ZCNDZH-43L2upO6A&s' />
                {props.message}
                <div>
                    <span>Like</span> {props.likesCount}
                </div>
                <div>
                    <button>Like</button>
                </div>

            </div>
        </div>
    );
}

export default Post; 