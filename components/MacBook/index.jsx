import React, { useState, useEffect } from 'react';
import './index.scss';
import useWindowSize from '../../common/hooks/useWindowSize';

export default ({ img, scale = 1 }) => {
  const [finalScale, setScale] = useState(scale);

  const { outerWidth } = useWindowSize();

  useEffect(() => {
    if (outerWidth < 750) {
      setScale(outerWidth / 800);
    }
  }, [outerWidth]);

  return (
    <div
      className="device device-macbook device-spacegray"
      style={{ transform: `scale(${finalScale}, ${finalScale})` }}
    >
      <div className="device-frame">
        <img className="device-content" src={img} />
      </div>
      <div className="device-stripe"></div>
      <div className="device-header"></div>
      <div className="device-sensors"></div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
  );
};
