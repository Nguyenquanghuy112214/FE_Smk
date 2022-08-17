import classNames from 'classnames/bind';
import styles from '~/sass/Components/_Vocabulary.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LeftContent, RightContent } from '~/Components/GrammarVocabulary/GrammarVocabulary';

import SupplementaryStudy from '~/Components/SupplementaryStudy';
import MenuTlMb from '~/Components/MenuTlMb/MenuTlMb';
const cx = classNames.bind(styles);

function Vocabulary() {
  return (
    <div>
      <MenuTlMb onClick />
      <SupplementaryStudy title="Từ vựng">
        <Row className={cx('wrapper-content')}>
          <Col xxl={4} xl={4} lg={4} md={6} sm={4} xs={12}>
            <LeftContent></LeftContent>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={6} sm={8} xs={12}>
            <RightContent></RightContent>
          </Col>
        </Row>
      </SupplementaryStudy>
    </div>
  );
}

export default Vocabulary;
