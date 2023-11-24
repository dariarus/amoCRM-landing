import React, {FunctionComponent, useEffect, useState} from 'react';

import appStyles from './app.module.css';

import {Header} from '../header/header';
import {InfoSlice} from '../info-slice/info-slice';
import {Button} from '../button/button';
import {Footer} from '../footer/footer';
import {getWindowWidth} from '../../utils/functions';

const App: FunctionComponent = () => {
  const [screenWidth, setScreenWidth] = useState<{innerWidth: number}>(getWindowWidth());

  const isMobileDevice = screenWidth.innerWidth > 715;

  useEffect(() => {
    const handleScreenWidth = () => setScreenWidth(getWindowWidth())

    window.addEventListener('resize', handleScreenWidth);
    return () => {
      window.removeEventListener('resize', handleScreenWidth);
    };
  }, [screenWidth.innerWidth])

  return (
    <div className={appStyles['app-container']}>
      <Header screenWidth={screenWidth.innerWidth}/>
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
            <InfoSlice heading={isMobileDevice ? "Виджеты" : "Skype аудит"} info="30 готовых решений"/>
            <InfoSlice heading={isMobileDevice ? "Dashboard" : "30 виджетов"} info="с показателями вашего бизнеса"/>
            <InfoSlice heading={isMobileDevice ? "Skype аудит" : "Dashboard"} info="отдела продаж и CRM системы"/>
            <InfoSlice heading={isMobileDevice ? "35 дней" : "Месяц amoCRM"} info="использования CRM"/>
          </ul>
          <Button/>
        </section>
      </main>
      <Footer screenWidth={screenWidth.innerWidth}/>
    </div>
  )
}

export default App;