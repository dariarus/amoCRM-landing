import React, {FunctionComponent} from 'react';

import appStyles from './app.module.css';

import {Header} from '../header/header';
import {InfoSlice} from '../info-slice/info-slice';
import {Button} from '../button/button';

const App: FunctionComponent = () => {
  return (
    <div className={appStyles['app-container']}>
      <Header/>
      <main className={appStyles.main}>
        <section className={appStyles['main__main-content']}>
          <h1 className={`${appStyles.text} ${appStyles.text_heading}`}>Зарабатывайте больше
            <br/>
            <span className={`${appStyles.text} ${appStyles.text_decorated_primary}`}>
              <span className={`${appStyles.text} ${appStyles['text_lower-case']}`}>
                с
              </span>
              Welbex
            </span>
          </h1>
          <p className={`${appStyles.text} ${appStyles.text_thin}`}>Развиваем и контролируем продажи за вас</p>
        </section>
        <section className={appStyles['main__services']}>
          <p className={`${appStyles.text} ${appStyles.text_common}`}>
            Вместе с
            <span className={`${appStyles.text} ${appStyles.text_decorated_secondary} ${appStyles['text_decorated_secondary-red']}`}>
              бесплатной
            </span>
              <br/>
            <span className={`${appStyles.text} ${appStyles.text_decorated_secondary} ${appStyles['text_decorated_secondary-yellow']}`}>
              консультацией
            </span>
            мы дарим:
          </p>
          <ul className={appStyles['main__free-services']}>
            <InfoSlice heading="Виджеты" info="30 готовых решений"/>
            <InfoSlice heading="Dashboard" info="с показателями вашего бизнеса"/>
            <InfoSlice heading="Skype Аудит" info="отдела продаж и CRM системы"/>
            <InfoSlice heading="35 дней" info="использования CRM"/>
          </ul>
          <Button/>
        </section>
      </main>
    </div>
  )
}

export default App;