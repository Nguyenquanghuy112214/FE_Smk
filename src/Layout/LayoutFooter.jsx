import { useSelector, useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '~/Layout/components/Header';
import Footer from '~/Layout/components/Footer';

import classNames from 'classnames/bind';
import styles from '~/sass/Components/_LayoutFooter.module.scss';

const cx = classNames.bind(styles);

function LayoutFooter({ children }) {
  const isActiveMenuMb = useSelector((state) => state.MenuMbActive.isActive);

  return (
    <div className={cx('wrapper-layoutfooter', 'd-flex')}>
      <div className={isActiveMenuMb ? cx('wrapper-header', 'active') : cx('wrapper-header')}>{<Header />}</div>
      <Container>
        <Row>
          <Col xxl={11} xl={11} lg={11} md={11} sm={10} xs={10} style={{ overflow: 'hidden', position: 'relative', minHeight: '100vh' }}>
            {children}
          </Col>
          <Col xxl={1} xl={1} lg={1} md={1} sm={2} xs={2}>
            {<Footer />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LayoutFooter;
