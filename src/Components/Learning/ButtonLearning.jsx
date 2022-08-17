import classNames from 'classnames/bind';
import styles from '~/sass/Components/_LearningPage.module.scss';

const cx = classNames.bind(styles);

function Learning({ active, title, onClick, img }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div onClick={handleClick} className={active ? cx('button-select', 'active') : cx('button-select')}>
      <div className={cx('button-select__left')}>
        <img src={img} alt="" />

        <h4 className={cx('title')}>{title}</h4>
      </div>
    </div>
  );
}

export default Learning;
