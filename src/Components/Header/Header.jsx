import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnX_j5cLcuY3HDfAC0lKmt-4PCQIttXGAS8Q&s' />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}> Log out</button> </div>
                    : <NavLink to={'/login'}> Login </NavLink>}
            </div>
        </header>
    );
}

export default Header;