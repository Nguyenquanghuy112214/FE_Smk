import classNames from 'classnames/bind';
import styles from '~/sass/Components/_LearningPage.module.scss';
import HeaderPage from '~/Components/HeaderPage';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import anh1 from '~/assets/image/section/1.png';
import anh2 from '~/assets/image/section/2.png';

import MenuTlMb from '~/Components/MenuTlMb/MenuTlMb';
import ButtonLearning from '~/Components/Learning/ButtonLearning';
import NavigateTop, { NavigateContent } from '~/Components/Learning/NavigateTop';
import * as GetTopic from '~/services/GetTopic';
import { setTopic } from '~/Redux/TopicSlice';
import * as GetLesson from '~/services/GetLesson';

const cx = classNames.bind(styles);

function Learning() {
  const [active, setActive] = useState(null);
  const [datatopic, setDataTopic] = useState();
  const [datalesson, setDataLesson] = useState();
  const [topic, setTopic] = useState();
  const listTopic = useSelector((state) => state.Topic);

  // handle button left
  const handleClick = async (index, item) => {
    setActive(index);
    const res = await GetLesson.getLesson(item.idtopic);
    setDataTopic(item);
    setDataLesson(res);
  };

  useEffect(() => {
    const idclass = JSON.parse(localStorage.getItem('topic')).idClass;
    const idbook = JSON.parse(localStorage.getItem('topic')).idBook;

    const fetch = async () => {
      const res = await GetTopic.getTopic(idbook, idclass);
      setTopic(res);
    };
    fetch();
  }, []);

  let data;
  if (topic !== undefined) {
    data = topic;
  } else if (listTopic[0] !== undefined) {
    data = listTopic[0];
  }

  return data ? (
    <div className={cx('d-flex')}>
      <div className={active !== null ? cx('wrapper-left', 'active') : cx('wrapper-left')}>
        <MenuTlMb onClick />
        <div className={cx('wrapper')}>
          <HeaderPage title="Học bài" />
          <div className={cx('wrapper-button')}>
            {data
              ? data.map((item, index) => {
                  return (
                    <ButtonLearning
                      active={active === index ? true : false}
                      key={index}
                      onClick={() => handleClick(index, item)}
                      title={item.name}
                      img={anh1}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <div className={active !== null ? cx('wrapper-right', 'active') : cx('wrapper-right')}>
        <NavigateTop datatopic={datatopic} datalesson={datalesson} active={active}></NavigateTop>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Learning;
