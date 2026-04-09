import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../Common/FormsControl/FormsControl';
import { maxLengthCreator, required } from '../../../Utils/Validators/Validators';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    validate={[required, maxLength100]}
                    name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
