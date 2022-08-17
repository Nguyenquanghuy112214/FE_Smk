import classNames from 'classnames/bind';
import styles from '~/sass/Components/_LayoutNoHeader.module.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);

function LayoutNoHeader({ children }) {
  return (
    <div className={cx('wrapper-layoutnoheader')}>
      <Container style={{ maxWidth: '100%' }}>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LayoutNoHeader;
