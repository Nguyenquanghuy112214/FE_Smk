import classNames from 'classnames/bind';
import styles from '~/sass/Components/_BookByAge.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setModalSelect } from '~/Components/ModalSelectClass/HandleModalSlice';
import * as getTopic from '~/services/GetTopic';
import Button from '~/Components/Button';
import { setBookByAge } from '~/Redux/BookByAgeSlice';
import { setTopic } from '~/Redux/TopicSlice';
import { setVocabyLesson } from '~/Redux/VocaByLessonSlice';
import * as GetVocaByLesson from '~/services/GetVocaByLesson';
import anh1 from '~/assets/image/sachdep/anh1.jpg';

const cx = classNames.bind(styles);

function BookByAge({ listBook }) {
  const dispatch = useDispatch();
  const idBook = useSelector((state) => state.BookByAge.isBook);
  const idClass = useSelector((state) => state.CardClass.isNumber.class);

  const handleActive = (item) => {
    dispatch(setBookByAge(item.idbook));
  };

  const handleClick = async () => {
    const [GetTopic, GetVocal] = await Promise.all([getTopic.getTopic(idBook, idClass), GetVocaByLesson.getVocaByLesson(idClass, idBook)]);

    console.log('GetVocal', GetVocal);
    if (idClass !== undefined && idBook !== undefined) {
      dispatch(setTopic(GetTopic));
      dispatch(setVocabyLesson(GetVocal));
      localStorage.setItem('topic', JSON.stringify({ idBook: idBook, idClass: idClass }));
      dispatch(setModalSelect(false));
    } else {
      alert('Vui lòng chọn độ tuổi!');
    }
  };

  return (
    <div className={cx('wrapper-img')}>
      {listBook !== undefined &&
        listBook.map((item) => {
          return (
            <div key={item.idbook} onClick={() => handleActive(item)} className={idBook === item.idbook ? cx('img', 'active') : cx('img')}>
              <img src={anh1} alt="" />
              <div className={cx('start')}>
                <Button onClick={handleClick} df lg title1="Bắt đầu" />
              </div>
              <span>{item.nameBook}</span>
            </div>
          );
        })}
    </div>
  );
}

export default BookByAge;
