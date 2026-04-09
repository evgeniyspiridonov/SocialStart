import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'HI how are you?', likesCount: 12 },
                { id: 2, message: 'HI how are you?', likesCount: 12 },
                { id: 3, message: 'HI how are you?', likesCount: 12 },
                { id: 4, message: 'HI how are you?', likesCount: 12 },
                { id: 5, message: 'HI how are you?', likesCount: 12 },
                { id: 6, message: 'HI how are you?', likesCount: 12 },
                { id: 7, message: 'HI how are you?', likesCount: 12 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Company #1' },
                { id: 2, name: 'Company #2' },
                { id: 3, name: 'Company #3' },
                { id: 4, name: 'Company #4' },
                { id: 5, name: 'Company #5' },
                { id: 6, name: 'Company #6' },
                { id: 7, name: 'Company #7' },
            ],
            messages: [
                { id: 1, message: '1' },
                { id: 2, message: '2' },
                { id: 3, message: '3' },
                { id: 4, message: '4' },
                { id: 5, message: '5' },
                { id: 6, message: '6' },
                { id: 7, message: '7' },
            ],
            newMessageBody: " "
        }
    },
    _callSubscriber() {
        console.log();
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}
export default store;