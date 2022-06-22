import React from 'react';
import './index.scss';
import { withRouter } from 'next/router';
import { withTranslation } from '../../i18n';




const Price = () => {
  return (
    <div style={{ height: '500px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <div>
        <h2 style={{ marginBottom: 20 }}>{"感谢您的支持  web clipper 加强包已停止售卖"}</h2>
        <h2>{"Thank you for your support web clipper Powerpack is no longer available"}</h2>
      </div>
    </div>
  );
};

export default withTranslation('common')(withRouter(Price));
