import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Switch>
                    <PrivateRoute exact path="/protected" component={PrivateRoute}/>
                    <Route path="/login" component={Login}/>
                    <Route component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

// export const axiosWithAuth =() => {
//     const token = localStorage.getItem('token');

//     return axios.create({
//         headers: {
//             Authorization: token,
//         },
//     });
// };