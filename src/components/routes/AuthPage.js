import React, {Component} from 'react';
import SignInForm from '../auth/SingInForm'

class AuthPage extends Component {
    static propTypes = {};
    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <SignInForm />
            </div>
        );
    }
}

export default AuthPage;
