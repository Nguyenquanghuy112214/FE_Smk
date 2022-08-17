import classNames from 'classnames/bind';
import styles from '~/sass/Components/_RankItem.module.scss';

import avatar from '~/assets/image/avatar.jpg';
import diamon from '~/assets/image/section/diamon.png';

const cx = classNames.bind(styles);
function RankItem({ top1, top2, top3 }) {
  const classes = cx('wrapper', { top1, top2, top3 });

  return (
    <div className={classes}>
      <div className={cx('profile')}>
        <span className={cx('ranking')}>1</span>
        <img src={avatar} alt="" />
        <span className={cx('name')}>Vũ Duy Long dz</span>
      </div>
      <div className={cx('point')}>
        <img src={diamon} alt="" />
        <span>42.902</span>
      </div>
    </div>
  );
}

export default RankItem;
