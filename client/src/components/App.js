import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Login from './auth/Login';
import Register from './auth/Register';
import Alert from './layout/Alert';
import setAuthToken from "../utils/setAuthToken";
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from './routing/PrivateRoute';
import CreateProfile from './profile-form/CreateProfile';
import EditProfile from './profile-form/EditProfile';
import EditVisitor from './visitor-form/EditVisitor';
import EditTraining from './training-form/EditTraining';
import AddExperience from './profile-form/AddExperience';
import AddEducation from './profile-form/AddEducation';
import AddVisitor from './visitor-form/AddVisitor';
import AddTraining from './training-form/AddTraining';
import Profiles from './profiles/Profiles';
import Profile from './profile/Profile';
import Posts from './posts/Posts';
import Post from './post/Post';
import Metrics from './metrics/Metrics';
import Sd029Main from './sd029/Sd029Main';
// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from "../actions/auth";

import '../style/App.css';


if(localStorage.token){
    setAuthToken(localStorage.token);
}

const App = () => {

    // Similar to COMPONENT DID MOUNT METHOD, make sure to pass the second argument of an empty array, otherwise it
    // will continously call the end-point
    useEffect(() => {
        store.dispatch(loadUser())
    }, []);

    return(
        <Provider store={store}>
            <Router>
                <Fragment>
                   <Navbar />
                   <Route exact path="/" component={ Landing } />
                   <section className="container">
                       <Alert />
                       <Switch>
                            <Route exact path="/register" component={ Register } />
                            <Route exact path="/login" component={ Login } />
                            <Route exact path="/profiles" component={ Profiles } />
                            <Route exact path="/profile/:id" component={ Profile } />
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                            <PrivateRoute exact path="/edit-training/:id" component={EditTraining} />
                            <PrivateRoute exact path="/edit-visitor/:id" component={EditVisitor} />
                            <PrivateRoute exact path="/add-experience" component={AddExperience} />
                            <PrivateRoute exact path="/add-education" component={AddEducation} />
                            <PrivateRoute exacct path="/add-visitor" component={AddVisitor} />
                           <PrivateRoute exacct path="/add-training" component={AddTraining} />
                           <PrivateRoute exact path="/posts" component={Posts} />
                           <PrivateRoute exact path="/posts/:id" component={Post} />
                           <PrivateRoute exact path="/metrics" component={Metrics} />
                           <PrivateRoute exact path="/sd029s" component={Sd029Main} />
                       </Switch>
                   </section>
                </Fragment>
            </Router>
        </Provider>
    )

};
export default App;