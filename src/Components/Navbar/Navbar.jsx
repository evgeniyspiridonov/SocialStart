import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <div className={s.item}>
          <NavLink to='/profile'
            className={({ isActive }) => isActive ? s.activeLink : undefined}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs'
            className={({ isActive }) => isActive ? s.activeLink : undefined}>Messages</NavLink>
        </div>
        <NavLink to='/users'
          className={({ isActive }) => isActive ? s.activeLink : undefined}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          className={({ isActive }) => isActive ? s.activeLink : undefined}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          className={({ isActive }) => isActive ? s.activeLink : undefined}>Music</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink
          className={({ isActive }) => isActive ? s.activeLink : undefined}>Settings</NavLink>
      </div>

    </nav >
  );
}

export default Navbar;