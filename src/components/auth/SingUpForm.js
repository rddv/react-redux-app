import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'
import ErrorField from './ErrorField'

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValuePass = minValue(5);

class SingUpForm extends Component {
    static propTypes = {};

    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <Field name='email' component={ErrorField} validate={email}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name='password' component={ErrorField} type="password" validate={minValuePass}/>
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}


export default reduxForm({
    form: 'auth',
})(SingUpForm);
