import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Utils/Validators/Validators';
import { Textarea } from '../../../Common/FormsControl/FormsControl';

const maxLength10 = maxLengthCreator(100);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea}
                    placeholder="Post message" validate={[required, maxLength10]} />
            </div>
            <div>
                <button> Add Post</button>
            </div>
        </form>
    );
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo(props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.post}>
                {postsElements}
            </div>
        </div >
    )
});

export default MyPosts; 