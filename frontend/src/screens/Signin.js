import React from 'react';
import '../scss/signin.scss';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const Signin = () => {
    return (
        <div className="signin">
            <header className="signin__header"></header>
            <div className="signin__form">
                <div className="signin__form__welcome">
                    Welcome to our website
                </div>
                <div className="signin__form__enter">
                    <div className="signin__form__enter__cover">
                        <div className="signin__form__enter__cover__name">
                            Tài khoản
                        </div>
                        <input
                            className="signin__form__enter__input"
                            placeholder="Username"
                        />
                    </div>
                    <div className="signin__form__enter__cover">
                        <div className="signin__form__enter__cover__name">
                            {' '}
                            Mật khẩu
                        </div>
                        <input
                            className="signin__form__enter__input"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div className="signin__form__btnsCover">
                    <NavLink
                        to={'/home_page'}
                        className="signin__form__btnsCover__btn DN"
                    >
                        Đăng nhập
                    </NavLink>
                    <NavLink
                        to={'/signup'}
                        className="signin__form__btnsCover__btn DK"
                    >
                        Đăng ký
                    </NavLink>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signin;
