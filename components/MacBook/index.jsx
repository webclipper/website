import React from 'react';
import './index.scss';

export default ({ img, scale = 1 }) => (
  <div
    className="device device-macbook device-spacegray"
    style={{ transform: `scale(${scale}, ${scale})` }}
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
