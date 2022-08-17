import classNames from 'classnames/bind';
import styles from '~/sass/Components/_Footer.module.scss';

import { Link } from 'react-router-dom';
import config from '~/config';

import anh1 from '~/assets/image/section/9.png';
import anh2 from '~/assets/image/section/10.png';
import anh3 from '~/assets/image/section/11.png';
import anh4 from '~/assets/image/section/12.png';
import anh5 from '~/assets/image/section/13.png';

// import { FaWarehouse } from 'react-icons/fa';
// import { BsFillTelephoneFill, BsFillKeyFill } from 'react-icons/bs';

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-header')}>
        <div className={cx('img')}>
          <img src={anh1} alt="" />
          <p>Xếp hạng</p>
        </div>
        <div className={cx('img')}>
          <img src={anh2} alt="" />
          <p>Nhiệm vụ</p>
        </div>
        <div className={cx('img')}>
          <img src={anh3} alt="" />
          <p>Trò chơi</p>
        </div>
        <div className={cx('img')}>
          <img src={anh4} alt="" />
          <p>Lộ trình</p>
        </div>
        <div className={cx('img')}>
          <Link to={config.routes.register}>
            <img src={anh5} alt="" />
            <p>Kích hoạt</p>
          </Link>
        </div>
      </div>
      {/* <div className={cx('wrapper-footer')}>
        <p className={cx('title')}>Đồng hành cùng chúng tôi</p>
        <div>
          <div>
            <Button to="/" noefect leftIcon={<BsFillTelephoneFill />} title1="Về chúng tôi" />
          </div>
          <div>
            <Button to="/" noefect leftIcon={<BsFillTelephoneFill />} title1=" Liên hệ" />
          </div>
          <div>
            <Button to="/" noefect leftIcon={<BsFillKeyFill />} title1=" Điều khoản sử dụng" />
          </div>
          <div>
            <Button to="/" noefect leftIcon={<FaWarehouse />} title1=" Điều khoản bảo mật" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
