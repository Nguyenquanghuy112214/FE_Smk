import classNames from 'classnames/bind';
import styles from '~/sass/Components/_Register.module.scss';
import banner from '~/assets/image/section/bglogin.jpg';
import { Link } from 'react-router-dom';
import config from '../../config';

import { useState, useEffect, useLayoutEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import * as Login from '~/services/Login';

const cx = classNames.bind(styles);

function Register() {
  const [showEyes, setShowEyes] = useState(false);
  const [checktoken, setCheckToken] = useState(false);

  const [error, setError] = useState(false);

  const handleShowEye = () => {
    setShowEyes(!showEyes);
  };

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (localStorage.getItem('token')) {
      navigate(config.routes.homepage);
    } else {
      navigate(config.routes.login);
    }
  }, [checktoken]);

  const handleSubmit = (values) => {
    const fetchAPI = async () => {
      try {
        const dn = await Login.login(values);
        console.log('dn', dn);
        // dispatch(login(dn.data));
        localStorage.setItem('token', dn.data.token);
        // localStorage.setItem('name', dn.data.fullName);

        setCheckToken(true);
      } catch (error) {
        setError(true);
      }
    };

    fetchAPI();
  };
  return (
    <Formik
      initialValues={{ Username: '', Password: '' }}
      validationSchema={Yup.object({
        Username: Yup.string().required('Vui lòng nhập trường này'),
        Password: Yup.string().required('Vui lòng nhập trường này'),
      })}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form>
            <div className={cx('modal')}>
              <div className={cx('wrapper')}>
                <div className={cx('img')}>
                  <img src={banner} alt="" />
                </div>
                <div className={cx('form')}>
                  <h2 className={cx('title')}>Đăng nhập</h2>
                  <div className={cx('content')}></div>
                  <div className={cx('user')}>
                    {errors.Username && touched.Username ? (
                      <span className={cx('text-user', 'active')}>{errors.Username}</span>
                    ) : (
                      <span className={cx('span')}>Nhập tên đăng nhập</span>
                    )}

                    <Field
                      name="Username"
                      type="text"
                      placeholder="Nhập tên đăng nhập"
                      onFocus={() => setError(false)}
                      className={errors.Username && touched.Username ? cx('username', 'active') : cx('username')}
                    />
                  </div>
                  <div className={cx('password')}>
                    {errors.Password && touched.Password ? (
                      <span className={cx('text-password', 'active')}>{errors.Password}</span>
                    ) : (
                      <span className={cx('span')}>Nhập mật khẩu</span>
                    )}

                    <Field
                      name="Password"
                      Focus={() => setError(false)}
                      type={showEyes ? 'password' : 'text'}
                      placeholder="Nhập tên đăng nhập"
                      className={errors.Password && touched.Password ? cx('password', 'active') : cx('password')}
                    />
                    <i className={cx('icon')} onClick={handleShowEye}>
                      {showEyes ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </i>
                  </div>
                  {error === true && typeof localStorage.getItem('token') === 'object' ? (
                    <div className={cx('toltal-error')}>Tên đăng nhập hoặc mật khẩu không chính xác</div>
                  ) : (
                    ''
                  )}

                  <div className={cx('naivgate')}>
                    <span>
                      Bạn đã có tài khoản?
                      <span className={cx('login-title')}>
                        <Link to={config.routes.register}> Đăng ký</Link>
                      </span>
                    </span>
                  </div>
                  <button type="submit" className={cx('login')}>
                    Đăng nhập
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Register;
