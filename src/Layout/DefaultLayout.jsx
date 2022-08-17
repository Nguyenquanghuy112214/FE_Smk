import classNames from 'classnames/bind';
import styles from '~/sass/Components/_DefaultLayout.module.scss';

import Header from '~/Layout/components/Header';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const isActiveMenuMb = useSelector((state) => state.MenuMbActive.isActive);

  return (
    <div className={cx('wrapper-layoutdefault')}>
      <div className={isActiveMenuMb ? cx('wrapper-header', 'active') : cx('wrapper-header')}>{<Header />}</div>
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} style={{ overflow: 'hidden', position: 'relative', minHeight: '100vh' }}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DefaultLayout;
