import React, {FunctionComponent} from 'react';

import infoSliceStyles from './info-slice.module.css';

type TInfoSlice = {
  heading: string;
  info: string;
}

export const InfoSlice: FunctionComponent<TInfoSlice> = (props) => {
  return (
    <li className={infoSliceStyles.item}>
      <h3 className={`${infoSliceStyles.text} ${infoSliceStyles.text_heading}`}>{props.heading}</h3>
      <p className={`${infoSliceStyles.text} ${infoSliceStyles.text_paragraph}`}>{props.info}</p>
    </li>
  )
}