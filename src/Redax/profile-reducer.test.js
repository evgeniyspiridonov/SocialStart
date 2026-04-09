import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
let state = {
    posts: [
        { id: 1, message: 'HI how are you?', likesCount: 12 },
        { id: 2, message: 'HI how are you', likesCount: 12 },
        { id: 3, message: 'HI how are ', likesCount: 12 },
        { id: 4, message: 'HI how ', likesCount: 12 },
        { id: 5, message: 'HI ho', likesCount: 12 },
        { id: 6, message: 'HI h', likesCount: 12 },
        { id: 7, message: 'HI ', likesCount: 12 },
    ],
};

it('lenght of posts should be increased', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(8);
    expect(newState.posts[7].message).toBe("it-kamasutra.com");
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(8);
    expect(newState.posts[7].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6);
});

it('`after deleting length shouldn\'t be decrement if id is incorrect`', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(7);
});