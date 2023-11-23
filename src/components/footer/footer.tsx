import React, {FunctionComponent} from 'react';

import footerStyles from './footer.module.css';
import {ContactButton} from '../contact-button/contact-button';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles['footer__content-container']}>
        <div className={footerStyles['footer__info-wrap']}>
          <div className={footerStyles['footer__about-company']}>
            <h3 className={`${footerStyles.text} ${footerStyles.text__heading}`}>О компании</h3>
            <ul className={footerStyles.footer__list}>
              <li className={footerStyles['footer__list-item']}>
                <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Партнёрская программа</a>
              </li>
              <li className={footerStyles['footer__list-item']}>
                <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Вакансии</a>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer__menu}>
            <h3 className={`${footerStyles.text} ${footerStyles.text__heading}`}>Меню</h3>
              <ul className={`${footerStyles.footer__list} ${footerStyles['footer__menu-list']}`}>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Расчёт стоимости</a>
                </li>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Кейсы</a>
                </li>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Услуги</a>
                </li>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Благодарственные письма</a>
                </li>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Виджеты</a>
                </li>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Сертификаты</a>
                </li>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Интеграции</a>
                </li>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Блог на Youtube</a>
                </li>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Наши клиенты</a>
                </li>
                <li className={footerStyles['footer__list-item']}>
                  <a href="#" className={`${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link}`}>Вопрос / Ответ</a>
                </li>
              </ul>
          </div>
        </div>
        <div className={footerStyles.footer__contacts}>
          <h3 className={`${footerStyles.text} ${footerStyles.text__heading}`}>Контакты</h3>
          <p className={`${footerStyles.text} ${footerStyles.text__paragraph}`}>+7 555 555-55-55</p>
          <div className={footerStyles['footer__icons-container']}>
            <ContactButton type="telegram"/>
            <ContactButton type="viber"/>
            <ContactButton type="whatsapp"/>
          </div>
          <p className={`${footerStyles.text} ${footerStyles.text__paragraph}`}>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </div>
      <div className={footerStyles['footer__privacy-policy-info']}>
        <p className={`${footerStyles.text} ${footerStyles.text__thin}`}>©WELBEX 2022. Все права защищены.</p>
        <a href="#" className={
          `${footerStyles.text} ${footerStyles.text__paragraph} ${footerStyles.text__link} ${footerStyles.text__thin}`
        }>Политика конфиденциальности</a>
      </div>
    </footer>
  )
}