import React, {FunctionComponent} from 'react';

import contactButtonStyles from './contact-button.module.css';

type TContactButton = {
  type: 'telegram' | 'viber' | 'whatsapp'
}

export const ContactButton: FunctionComponent<TContactButton> = (props) => {
  return (
    <button className={
      props.type === 'telegram'
        ? `${contactButtonStyles.button} ${contactButtonStyles.button_telegram}`
        : props.type === 'viber'
          ? `${contactButtonStyles.button} ${contactButtonStyles.button_viber}`
          : `${contactButtonStyles.button} ${contactButtonStyles.button_whatsapp}`
    }/>
  )
}