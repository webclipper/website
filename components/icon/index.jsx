import './index.scss';

export default ({ type, style }) => (
  <svg className="ali-icon" aria-hidden="true">
    <use xlinkHref={'#' + type} style={style} />
  </svg>
);
