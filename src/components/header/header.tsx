import React, {FunctionComponent} from 'react';

import headerStyles from './header.module.css';
import logo from '../../images/logo.png';

import {ContactButton} from '../contact-button/contact-button';
import {TWindowWidthProps} from '../../services/types';

export const Header: FunctionComponent<TWindowWidthProps> = (props) => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__wrap}>
        <div className={headerStyles['header__logo-area']}>
          <img src={logo} alt="Логотип Welbex" className={headerStyles.header__logo}/>
          <p className={`${headerStyles.text} ${headerStyles.text_thin}`}>крупный интегратор CRM в Росcии и ещё 8
            странах</p>
        </div>
        <nav className={headerStyles.navigation}>
          <ul className={headerStyles.navigation__list}>
            <li className={headerStyles['navigation__list-item']}>
              <a href="#" className={`${headerStyles.text} ${headerStyles.text_link}`}>Услуги</a>
            </li>
            <li className={headerStyles['navigation__list-item']}>
              <a href="#" className={`${headerStyles.text} ${headerStyles.text_link}`}>Виджеты</a>
            </li>
            <li className={headerStyles['navigation__list-item']}>
              <a href="#" className={`${headerStyles.text} ${headerStyles.text_link}`}>Интеграции</a>
            </li>
            <li className={headerStyles['navigation__list-item']}>
              <a href="#" className={`${headerStyles.text} ${headerStyles.text_link}`}>Кейсы</a>
            </li>
            {
              props.screenWidth > 419 &&
              <li className={headerStyles['navigation__list-item']}>
                <a href="#" className={`${headerStyles.text} ${headerStyles.text_link}`}>Сертификаты</a>
              </li>
            }
          </ul>
        </nav>
      </div>
      <div className={`${headerStyles.header__wrap} ${headerStyles.header__wrap_contacts}`}>
        <p className={`${headerStyles.text} ${headerStyles.text_numbers}`}>+7 555 555-55-55</p>
        <div className={headerStyles['header__wrap-contact-info']}>
         <ContactButton type="telegram" />
         <ContactButton type="viber" />
         <ContactButton type="whatsapp" />
        </div>
      </div>
    </header>
  )
}