import classNames from 'classnames/bind';
import styles from '~/sass/Components/_HomePage.module.scss';

import sudying from '~/assets/image/section/studying.png';
import anh2 from '~/assets/image/section/2.png';
import anh3 from '~/assets/image/section/3.png';
import vocabulary from '~/assets/image/section/vocabulary.png';
import talking from '~/assets/image/section/talking.png';
import learning from '~/assets/image/section/learning.png';
import listen from '~/assets/image/section/listen.png';
import student from '~/assets/image/section/student.png';

import CardItem from '~/Components/CardItem';
import ModalSeclectClass from '~/Components/ModalSelectClass/ModalSelectClass';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import avatar from '~/assets/image/avatar.jpg';
import Button from '~/Components/Button';
import MenuTlMb from '~/Components/MenuTlMb/MenuTlMb';

import SectionHeader from '~/Components/Section/SectionHeader';
import SectionContent from '~/Components/Section/SectionContent';
import { setModalSelect } from '~/Components/ModalSelectClass/HandleModalSlice';
import pencil from '~/assets/image/section/pencil.png';
import lightning from '~/assets/image/section/lightning.png';

import config from '~/config';

const cx = classNames.bind(styles);
function HomePage() {
  const [ismodal, setIsModal] = useState(false);
  const Class = useSelector((state) => state.CardClass.isNumber);
  const idBook = useSelector((state) => state.BookByAge.isBook);

  const dispatch = useDispatch();
  const ref = useRef();

  const openModalSelect = () => {
    dispatch(setModalSelect(true));
  };

  useEffect(() => {
    if (idBook === undefined || Class.class === undefined) {
      dispatch(setModalSelect(true));
    }
  }, []);

  const handleLearning = () => {
    if (idBook === undefined || Class.class === undefined) {
      dispatch(setModalSelect(true));
    }
    return;
  };
  return (
    Class !== undefined && (
      <div ref={ref}>
        <ModalSeclectClass isActive={ismodal} />

        <MenuTlMb onClick />

        <div className={cx('wrapper-content')}>
          <div className={cx('header-homepage')}>
            <div className={cx('header-homepage__left')}>
              <img src={avatar} alt="" />
              <div className={cx('header-homepage__left__nickname')}>
                <p className={cx('text-1')}>Xin ch??o, </p>
                <p className={cx('text-2')}>Long V??</p>
              </div>
            </div>
            <Button
              onClick={openModalSelect}
              lg
              title1={`${Class.title !== undefined ? Class.title : 'Ch???n'} ${
                Class.title !== undefined && Class.title.length >= 5 ? 'th??ng tu???i' : 'tu???i'
              }`}
            />
          </div>

          <div className={cx('blur')} style={{ background: '#fee0de' }}></div>
          {/* Hoc bo tro */}
          <div className={cx('wrapper-section')}>
            <SectionHeader img={pencil} title="H???c ch??nh kh??a" />
            <Swiper spaceBetween={10} slidesPerView={'auto'}>
              <SwiperSlide>
                <CardItem
                  onClick={handleLearning}
                  to={idBook !== undefined && Class.class !== undefined ? config.routes.learning : config.routes.homepage}
                  white
                  img={sudying}
                  sm
                  df
                  title1="free"
                  maintitle="H???c b??i"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardItem white img={anh2} sm df title1="Free" maintitle="B??i t???p" />
              </SwiperSlide>
              <SwiperSlide>
                <CardItem white img={anh3} sm plus title1="Plus" title2="+" maintitle="B??i h??t" />
              </SwiperSlide>
              <SwiperSlide>
                <CardItem white img={anh3} sm df title1="Free" maintitle="C??u chuy???n" />
              </SwiperSlide>
              <SwiperSlide>
                <CardItem white img={anh3} sm df title1="Free" maintitle="Kho video" />
              </SwiperSlide>
              <SwiperSlide>
                <CardItem white img={anh3} sm df title1="Free" maintitle="H???c li???u" />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Hoc chinh khoa va lo luyen thi */}
          <div className={cx('wapper-section--body')}>
            <div className={cx('wrapper-section')}>
              <SectionHeader img={lightning} title="H???c b??? tr???" />
              <SectionContent>
                <CardItem
                  clwhite
                  to={config.routes.vocabulary}
                  justify
                  textwhite
                  primary
                  img={vocabulary}
                  sm
                  plus
                  title1="Plus"
                  title2="+"
                  maintitle="T??? v???ng"
                />
                <CardItem clwhite justify textwhite primary img={talking} sm plus title1="Plus" title2="+" maintitle="H???i tho???i" />
                <CardItem
                  clwhite
                  to={config.routes.grammar}
                  justify
                  textwhite
                  primary
                  img={learning}
                  sm
                  plus
                  title1="Plus"
                  title2="+"
                  maintitle="Ng??? ph??p"
                />
                <CardItem clwhite justify textwhite primary img={listen} sm plus title1="Plus" title2="+" maintitle="Luy???n nghe" />
              </SectionContent>
            </div>
            <div className={cx('wrapper-section')}>
              <SectionHeader img={student} title="L?? luy???n thi" />
              <SectionContent>
                <CardItem white img={sudying} sm df title1="free" maintitle="Luy???n ?????" />
                <CardItem white img={anh2} sm df title1="Free" maintitle="H?????ng d???n luy???n thi" />
              </SectionContent>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default HomePage;
