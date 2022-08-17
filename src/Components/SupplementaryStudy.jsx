import classNames from 'classnames/bind';
import styles from '~/sass/Components/_Vocabulary.module.scss';
import HeaderPage from './HeaderPage';

const cx = classNames.bind(styles);

function SupplementaryStudy({ title, children }) {
  return (
    <div className={cx('wrapper')}>
      <HeaderPage title={title} />
      <div className={cx('content')}>{children}</div>
    </div>
  );
}

export default SupplementaryStudy;
