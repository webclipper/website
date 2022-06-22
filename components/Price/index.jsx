import React from 'react';
import './index.scss';
import { withRouter } from 'next/router';
import { withTranslation } from '../../i18n';




const Price = (props) => {
  return (
    <div style={{ height: '500px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <div>
        <h3>{props.t('powerpack-not-available')}</h3>
      </div>
    </div>
  );
};

export default withTranslation('common')(withRouter(Price));
