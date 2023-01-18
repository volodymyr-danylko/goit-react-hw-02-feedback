import PropTypes from 'prop-types';
import style from './notification.module.css';

export const Notification = ({ message }) => {
  return <p className={style.container}>{message}</p>;
};

Notification.porpTypes = {
  message: PropTypes.string.isRequired,
};
