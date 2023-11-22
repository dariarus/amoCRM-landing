import React, {FunctionComponent} from 'react';

import buttonStyles from './button.module.css';

export const Button: FunctionComponent = () => {
  return(
    <button className={buttonStyles.button}>
      Получить консультацию
    </button>
  )
}