import './index.scss';

export default ({ type, style }) => (
  <svg className="ali-icon" aria-hidden="true" style={style}>
    <use xlinkHref={'#' + type} />
  </svg>
);
