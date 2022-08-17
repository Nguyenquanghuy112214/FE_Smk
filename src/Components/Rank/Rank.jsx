import classNames from 'classnames/bind';
import styles from '~/sass/Components/_Rank.module.scss';

import Navigate from './Navigate';
import RankItem from './RankItem';
import avatar from '~/assets/image/avatar.jpg';
import diamon from '~/assets/image/section/diamon.png';
import HeaderPage from '~/Components/HeaderPage';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);

function Rank() {
  return (
    <div className={cx('wrapper')}>
      <Row>
        <Col xl={4} lg={4} md={12} sm={12}>
          <HeaderPage title="Bảng xếp hạng " />
          <div className={cx('wrapper')}>
            <Navigate />
          </div>
        </Col>
        <Col xl={8} lg={8} md={12} sm={12}>
          <div className={cx('wapper-ranking')}>
            <RankItem top1 />
            <RankItem top2 />
            <RankItem top3 />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <div className={cx('rank-for__me')}>
              <div className={cx('ranking-info__left')}>
                <div className={cx('numerical__order')}>
                  <span className={cx('title-rank')}>Hạng</span> <span className={cx('number')}>95</span>
                </div>

                <div className={cx('name')}>
                  <img src={avatar} alt="" />
                  <span>Long Vũ</span>
                </div>
              </div>

              <div className={cx('ranking-info__right')}>
                <img src={diamon} alt="" />
                <span>0</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Rank;
