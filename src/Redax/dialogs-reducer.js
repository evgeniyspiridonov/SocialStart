const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            };
        default:
            return state;
    }

}
export const sendMessdgeCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;