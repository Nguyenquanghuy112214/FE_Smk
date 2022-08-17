import classNames from 'classnames/bind';
import styles from '~/sass/Components/_Navigate.module.scss';
import { useState } from 'react';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Button from '~/Components/Button';

const cx = classNames.bind(styles);

function Navigate() {
  const [activeweek, setActiveWeek] = useState(true);
  const [activemonth, setActiveMonth] = useState(false);
  const handleActiveWeek = () => {
    setActiveWeek(true);
    setActiveMonth(false);
  };
  const handleActiveMonth = () => {
    setActiveWeek(false);
    setActiveMonth(true);
  };
  return (
    <div className={cx('wrapper')}>
      {/* <div className={cx('list-location')}>
        <Button rank leftradius title1="Toàn quốc" />
        <Button rank title1="Hà Nội" />
        <Button rank rightradius title1="Trường tôi" />
      </div> */}
      <div className={cx('date')}>
        <span onClick={handleActiveWeek}>
          <Button date activedate={activeweek} leftradius title1="Tuần" />
        </span>
        <span>
          <Button activedate={activemonth} onClick={handleActiveMonth} date rightradius title1="Tháng" />
        </span>
      </div>
      <div className={cx('d-flex align-items-center justify-content-center')}>
        <Button xl title1="Tuần 32" leftIcon={<AiOutlineLeft />} rightIcon={<AiOutlineRight />} />
      </div>
    </div>
  );
}

export default Navigate;
