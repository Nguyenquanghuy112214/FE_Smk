import classNames from 'classnames/bind';
import styles from '~/sass/Components/_GrammarVocabulary.module.scss';

import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const cx = classNames.bind(styles);

function ButtonVocabulary({ index, title, xl, marque, height, onClick }) {
  const [direc, setDirec] = useState(true);

  useEffect(() => {
    setInterval(() => setDirec(!direc), (index + 1) * 5000);
    return () => clearInterval();
  }, []);

  const handleClick = () => {
    onClick();
  };

  const classes = cx('button', { xl, height });
  if (marque) {
    return (
      <button onClick={handleClick} className={classes}>
        <Marquee
          speed={(index + 1) * 30 * (Math.random() < 0.5 || Math.random() > 0.8 ? 0.5 : Math.random())}
          pauseOnHover={true}
          gradient={false}
        >
          {title}
        </Marquee>
      </button>
    );
  } else {
    return <button className={classes}>{title}</button>;
  }
}

export default ButtonVocabulary;
