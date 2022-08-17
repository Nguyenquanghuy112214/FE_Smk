import { BsChevronLeft } from 'react-icons/bs';

import classNames from 'classnames/bind';
import styles from '~/sass/Components/_HeaderPage.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderPage({ title }) {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(-1);
  };
  return (
    <div className={cx('title')}>
      <span className={cx('icon')} onClick={backPage}>
        <BsChevronLeft />
      </span>
      <h3>{title}</h3>
    </div>
  );
}

export default HeaderPage;
