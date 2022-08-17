import classNames from 'classnames/bind';
import styles from '~/sass/Components/_LearningPage.module.scss';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';

import { setModalTopic } from '~/Redux/CloseModalTopicSlice';
import * as GetVocabularyTopicAndLesson from '~/services/GetVocabularyByTopicAndLesson';

const cx = classNames.bind(styles);

function ModalLesson({ isActive, dataDetailLesson }) {
  const [vocabulary, setVocabulary] = useState();
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setModalTopic(false));
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await GetVocabularyTopicAndLesson.getVocabularyTopicAndLesson(dataDetailLesson[0].idtopic, dataDetailLesson[0].idlesson);
      setVocabulary(res);
    };
    fetch();
  }, [dataDetailLesson[0].idtopic, dataDetailLesson[0].idlesson]);

  return dataDetailLesson[0] !== undefined ? (
    <div className={isActive ? cx('modal', 'active') : cx('modal')}>
      <div className={cx('wrap-modal')}>
        <div className={cx('header-modal')}>
          <span className={cx('title-modal')}>Bài giảng trực tuyến</span>
          <span onClick={closeModal} className={cx('icon-close')}>
            <AiOutlineClose />
          </span>
        </div>
        <div className={cx('content-modal')}>
          {dataDetailLesson[0].link !== null ? (
            <div className={cx('content-modal__left')}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${dataDetailLesson[0] !== undefined ? dataDetailLesson[0].link.split('/')[3] : null}`}
                className={cx('iframe')}
              ></iframe>
            </div>
          ) : null}

          <div className={cx('content-modal__right')}>
            <h4 className={cx('lesson-modal')}>Unit 1: Family_Lesson 1_Family</h4>
            <h4 className={cx('vocabulary-modal')}>Từ vựng</h4>
            <div className={cx('list-vocabulary')}>
              {vocabulary !== undefined &&
                vocabulary.map((item) => {
                  return (
                    <div key={item.idvocabulary} className={cx('wrap-newword')}>
                      <p>{item.name}:</p>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ModalLesson;
