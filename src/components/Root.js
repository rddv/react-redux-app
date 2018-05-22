import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom'
import AdminPage from './routes/AdminPage'
import AuthPage from './routes/AuthPage'

class Root extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Route path='/auth' component={AuthPage}/>
                <Route path='/admin' component={AdminPage}/>
            </div>
        );
    }
}

export default Root;
