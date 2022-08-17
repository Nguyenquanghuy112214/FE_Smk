import classNames from 'classnames/bind';
import styles from '~/sass/Components/_LearningPage.module.scss';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalTopic } from '~/Redux/CloseModalTopicSlice';
import { motion } from 'framer-motion';

import anh1 from '~/assets/image/section/1.png';
import ModalLesson from './ModalLesson';
import * as GetLinkByTopicLesson from '~/services/GetLinkByTopicLesson';

const cx = classNames.bind(styles);

function NavigateTop({ active, datalesson, datatopic }) {
  const [buttonleft, setButtonLeft] = useState(true);

  // handle button right
  const selectButtonLeft = () => {
    setButtonLeft(true);
  };
  const selectButtonRight = () => {
    setButtonLeft(false);
  };

  return (
    datatopic !== undefined && (
      <div className={cx('header-right')}>
        <div className={cx('wrapper-button__right')}>
          <button onClick={selectButtonLeft} className={active !== null && buttonleft ? cx('button', 'active') : cx('button')}>
            Học bài
          </button>
          <button onClick={selectButtonRight} className={!buttonleft ? cx('button', 'active') : cx('button')}>
            Bài hát
          </button>
        </div>
        <div className={cx('img', 'mt10')}>
          <img src={anh1} alt="" />
          <h4>{datatopic.name}</h4>
        </div>
        <NavigateContent idtopic={datatopic.idtopic} datalesson={datalesson} buttonleft={buttonleft} />
      </div>
    )
  );
}

export default NavigateTop;

// NavigateContent
export function NavigateContent({ idtopic, buttonleft, datalesson }) {
  // active modal topic
  const dispatch = useDispatch();
  const [detaillesson, setDetailLesson] = useState();
  const [online, setOnlineLectures] = useState(false);
  const isActiveModalActive = useSelector((state) => state.TopicModal.isActive);

  const onlineLectures = async () => {
    setOnlineLectures(!online);
  };

  const openModalLesson = async (item) => {
    const res = await GetLinkByTopicLesson.getLinkByTopicLesson(idtopic, item.idlesson);
    setDetailLesson(res);
    dispatch(setModalTopic(true));
  };

  return (
    <div>
      {detaillesson !== undefined && (
        <ModalLesson dataDetailLesson={detaillesson !== undefined && detaillesson} isActive={isActiveModalActive} />
      )}
      {buttonleft === true && datalesson !== undefined ? (
        <div className={cx('content', 'mt20')}>
          <ul>
            <li>
              <button onClick={onlineLectures} className={cx('button')}>
                Bài giảng trực tuyến
              </button>
              <motion.ul
                initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                animate={{
                  height: online ? 'auto' : 0,
                  opacity: online ? 1 : 0,
                  overflow: online ? 'auto' : 'hidden',
                }}
                transition={{
                  duration: 0.3,
                }}
                className={cx('online-lectures')}
              >
                {datalesson.map((item) => {
                  return (
                    <li key={item.idlesson}>
                      <button onClick={() => openModalLesson(item)} className={cx('button', 'sm')}>
                        {`Bài giảng ${item.name}`}
                      </button>
                    </li>
                  );
                })}
              </motion.ul>
            </li>
            <li>
              <button className={cx('button')}>Từ vựng</button>
            </li>
            <li>
              <button className={cx('button')}>Bài tập</button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
