import React, { Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
//import DialogsContainer from './Components/Dialogs/DialogsContainer';
//import UsersContainer from './Components/Users/UserContainer';
//import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redax/app-reducer';
import Preloader from './Common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UserContainer'));

class App extends React.Component {

  componentDidMount() { this.props.initializeApp(); }

  render() {
    if (!this.props.initialized) { return <Preloader /> }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={withSuspense(DialogsContainer)()} />
            <Route path='/profile/:userId?' element={withSuspense(ProfileContainer)()} />
            <Route path='/users' element={withSuspense(UsersContainer)()} />
            <Route path='/login' element={withSuspense(Login)()} />
          </Routes>
        </div>
      </div >

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, { initializeApp }))(App);