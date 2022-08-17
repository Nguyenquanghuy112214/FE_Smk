import classNames from 'classnames/bind';
import styles from '~/sass/Components/_Header.module.scss';

import { useState } from 'react';
import { FaHome, FaSchool, FaUserTie, FaShoppingCart } from 'react-icons/fa';
import { GiArena } from 'react-icons/gi';
import { BiConversation } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

import config from '~/config';
import { Link, NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setMenuMb } from '~/pages/HomePage/HomePageSlice';

import logoHeader from '~/assets/image/logo_bkt.png';

const cx = classNames.bind(styles);

const listMenu = [
  { icon: <FaHome />, title: 'Trang chủ', navlink: config.routes.homepage },
  { icon: <FaSchool />, title: 'Trường học', navlink: config.routes.school },
  { icon: <GiArena />, title: 'Đấu trường', navlink: '/a' },
  { icon: <FaUserTie />, title: 'Cá nhân', navlink: '/a' },
  { icon: <FaShoppingCart />, title: 'Siêu thị', navlink: '/a' },
  { icon: <BiConversation />, title: 'Trò chuyện', navlink: '/a' },
  { icon: <IoMdNotifications />, title: 'Thông báo', navlink: '/a' },
];

function Header() {
  const [indexAc, setIndexAc] = useState(0);
  const dispatch = useDispatch();
  const handleCloseMenumb = () => {
    dispatch(setMenuMb(false));
  };

  const handleClick = (index) => {
    setIndexAc(index);
  };
  return (
    <div className={cx('wrapper-header')}>
      <img className={cx('image-logo')} src={logoHeader} alt="Logo" />
      <span className={cx('icon-close')} onClick={handleCloseMenumb}>
        <AiOutlineClose />
      </span>
      <ul className={cx('wrapper-menu')}>
        {listMenu.map((menu, index) => {
          return (
            <li className={cx('menu-item')} key={index}>
              <Link onClick={() => handleClick(index)} to={menu.navlink} className={index === indexAc ? cx('item', 'active') : cx('item')}>
                <span className={cx('menu-icon')}>{menu.icon}</span>
                <span className={cx('menu-title')}>{menu.title}</span>
              </Link>
              {/* <Button to={menu.navlink} leftIcon={menu.icon} title1={menu.title} /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
