import classNames from 'classnames/bind';
import styles from '~/sass/Components/_Grammar.module.scss';

import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '~/Components/GrammarVocabulary/Search';
import SupplementaryStudy from '~/Components/SupplementaryStudy';
import RightGrammar from '~/Components/Grammar/RightGrammar';

const cx = classNames.bind(styles);

function Grammar() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);

  const handleActive1 = () => {
    setActive1(true);
    setActive2(false);
  };

  const handleActive2 = () => {
    setActive1(false);
    setActive2(true);
  };
  return (
    <SupplementaryStudy title="Ngữ pháp">
      <Row className={cx('wrappr-content')}>
        <Col xxl={4} xl={4} lg={4} md={6} sm={4} xs={12} className={cx('content-left')}>
          <Search />
          <div className={cx('wrapper-button')}>
            <button onClick={handleActive1} className={active1 ? cx('button', 'active') : cx('button')}>
              Lớp học
            </button>
            <button onClick={handleActive2} className={active2 ? cx('button', 'active') : cx('button')}>
              Chủ đề
            </button>
          </div>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={6} sm={8} xs={12} style={{ textAlign: 'center' }}>
          <RightGrammar>
            <div>Chưa có dữ liệu</div>
          </RightGrammar>
        </Col>
      </Row>
    </SupplementaryStudy>
  );
}

export default Grammar;
