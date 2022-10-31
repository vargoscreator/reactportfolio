import React from 'react';
import '../styles/header.css';
import svg from '../img/logo.svg';
import $ from 'jquery'; 
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Header = () => { 

    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }    

    useEffect(() => {         
        if(i18n.language === "ua"){
            $(".header__lang").eq(0).addClass("select");
        }
        if(i18n.language === "ru"){
            $(".header__lang").eq(1).addClass("select");
        }
        if(i18n.language === "en"){
            $(".header__lang").eq(2).addClass("select");
        }
        $(".header__lang").on("click", function() {
            // Удаляем значения актив везде //
            $(".header__lang").removeClass("select");
            $(this).addClass("select");
        });
    }, []);

    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 70) {
            $(".header").addClass('line');
        }
        else{
            $(".header").removeClass("line");
        }
    });
    function burgerActive() {
        const bodyclick = document.querySelector('body');
        const header__burger = document.querySelector('.header__burger');
        const header_menu = document.querySelector('.header__menu');
        const header__overlay = document.querySelector('.header__overlay');
        const header__list = document.querySelector('.header__list');   

        bodyclick.classList.toggle('lock');
        header__burger.classList.toggle('active');
        header_menu.classList.toggle('active');
        header__overlay.classList.toggle('lock');
        header__list.classList.toggle('active');
    }

    return (
        <header className="header">
            <div className="container">
                    <div className="header__inner">

                        <div className="header__logo">
                            <a className="header__logo-images" href="/">
                                <img className="header__logo-img" src={svg} alt=""/>
                            </a>
                        </div>
                        <nav className="header__menu">
                            <ul className="header__list">
                                <li>
                                    <a className="header__link main" href="/#">{t('header__link main')}</a>
                                </li>
                                <li>
                                    <a className="header__link about" href="/#about">{t('header__link about')}</a>
                                </li>
                                <li>
                                    <a className="header__link work" href="/#work">{t('header__link work')}</a>
                                </li>
                                <li>
                                    <a className="header__link cont" href="/#contact">{t('header__link cont')}</a>
                                </li>
                                <div className="lang-li">
                                    <li>
                                        <div className="header__lang" onClick={() => changeLanguage("ua")}>UA</div>
                                    </li>
                                    <li>
                                        <div className="header__lang" onClick={() => changeLanguage("ru")}>RU</div>
                                    </li>
                                    <li>
                                        <div className="header__lang" onClick={() => changeLanguage("en")}>EN</div>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                        <div className="header__burger" onClick={burgerActive}>
                            <span></span>
                        </div>
                    </div>
            </div>
            <div className="header__overlay" onClick={burgerActive}></div>
        </header>    
    );
};

export default Header;