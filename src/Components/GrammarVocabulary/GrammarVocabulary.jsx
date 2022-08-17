import classNames from 'classnames/bind';
import styles from '~/sass/Components/_GrammarVocabulary.module.scss';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Alphabet from './Alphabet';
import ButtonVocabulary from './ButtonVocabulary';
import Search from './Search';
import { setIndexVoca } from '~/Redux/PostIndexVocaSlice';
import * as GetVocaByLesson from '~/services/GetVocaByLesson';

const cx = classNames.bind(styles);

const data2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W', 'Y'];

export function LeftContent() {
  const Vocabulary = useSelector((state) => state.VocabyLesson);
  const [voca, setVoca] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const idclass = JSON.parse(localStorage.getItem('topic')).idClass;
    const idbook = JSON.parse(localStorage.getItem('topic')).idBook;

    const fetch = async () => {
      const res = await GetVocaByLesson.getVocaByLesson(idclass, idbook);
      setVoca(res);
    };
    fetch();
  }, []);

  let data;
  if (Vocabulary[0] !== undefined) {
    data = Vocabulary[0];
  } else if (voca !== undefined) {
    data = voca;
  }

  const handleClick = (index) => {
    dispatch(setIndexVoca(index));
  };
  return data !== undefined ? (
    <div className={cx('wrapper', 'active')}>
      <Search />
      <div className={cx('content-body')}>
        <Alphabet gridsm title="Bảng chữ cái">
          {data2.map((item, index) => {
            return <ButtonVocabulary key={index} title={item} />;
          })}
        </Alphabet>
        <Alphabet mt40 title="Bài học">
          {data !== undefined &&
            data.map((item, index) => {
              return <ButtonVocabulary onClick={() => handleClick(index)} index={index} height marque key={index} title={item.nameTopic} />;
            })}
        </Alphabet>
      </div>
    </div>
  ) : null;
}

export function RightContent() {
  const Vocabulary = useSelector((state) => state.VocabyLesson);
  const indexVoca = useSelector((state) => state.PostIndexVoca.isNumber);
  const [voca, setVoca] = useState();

  useEffect(() => {
    const idclass = JSON.parse(localStorage.getItem('topic')).idClass;
    const idbook = JSON.parse(localStorage.getItem('topic')).idBook;

    const fetch = async () => {
      const res = await GetVocaByLesson.getVocaByLesson(idclass, idbook);
      setVoca(res);
    };
    fetch();
  }, []);

  let data;
  if (Vocabulary[0] !== undefined) {
    data = Vocabulary[0];
  } else if (voca !== undefined) {
    data = voca;
  }
  data = data[indexVoca];

  return data.voca != undefined ? (
    <div className={cx('wrapper')}>
      <Alphabet grid notitle>
        {data.voca !== undefined &&
          data.voca.map((item, index) => {
            return <ButtonVocabulary xl key={index} title={item.name} />;
          })}
      </Alphabet>
    </div>
  ) : null;
}
