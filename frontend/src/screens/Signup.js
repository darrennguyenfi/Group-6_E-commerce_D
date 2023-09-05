import React, { useState } from 'react';
import '../scss/signin.scss';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Popup from '../components/popup';

const Signup = () => {
    const [Click, setClick] = useState(false);

    const handleClick = () => {
        if (Click) setClick(!Click);
    };

    return (
        <div onClick={() => handleClick()} className="signup">
            <header className="signup__header"></header>
            <div className="signup__form">
                <div className="signup__form__title"> Sign up</div>
                <div className="signup__form__enter">
                    <div className="signup__form__enter__cover">
                        <div className="signup__form__enter__cover__name">
                            Tài khoản
                        </div>
                        <input
                            className="signup__form__enter__input"
                            placeholder="Username"
                        />
                    </div>
                    <div className="signup__form__enter__cover">
                        <div className="signup__form__enter__cover__name">
                            {' '}
                            Mật khẩu
                        </div>
                        <input
                            className="signup__form__enter__input"
                            placeholder="Password"
                        />
                    </div>
                    <div className="signup__form__enter__cover">
                        <div className="signup__form__enter__cover__name">
                            Xác nhận mật khẩu
                        </div>
                        <input
                            className="signup__form__enter__input"
                            placeholder="Confirm password"
                        />
                    </div>
                    <div className="signup__form__enter__cover">
                        <div className="signup__form__enter__cover__name">
                            {' '}
                            Email
                        </div>
                        <input
                            className="signup__form__enter__input"
                            placeholder="Email"
                        />
                    </div>
                    <div className="signup__form__enter__cover">
                        <div className="signup__form__enter__cover__name">
                            {' '}
                            SDT
                        </div>
                        <input
                            className="signup__form__enter__input"
                            placeholder="Phone number"
                        />
                    </div>
                </div>
                <Popup
                    title="Thành công"
                    content="Bạn đã đăng kí thành công"
                    trigger={Click}
                />
                <div className="signup__form__btnsCover">
                    <NavLink
                        to={'/'}
                        className="signup__form__btnsCover__btn DN"
                    >
                        Trở lại
                    </NavLink>
                    <button
                        onClick={() => setClick(true)}
                        className="signup__form__btnsCover__btn DK"
                    >
                        Đăng ký
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
