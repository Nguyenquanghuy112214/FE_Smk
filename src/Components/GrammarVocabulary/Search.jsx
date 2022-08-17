import classNames from 'classnames/bind';
import styles from '~/sass/Components/_GrammarVocabulary.module.scss';

import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const cx = classNames.bind(styles);

function Search() {
  const [active, setActive] = useState(false);
  return (
    <div className={active ? cx('search', 'active') : cx('search')}>
      <span>
        <AiOutlineSearch />
      </span>
      <input type="text" placeholder="Tìm kiếm" onBlur={() => setActive(false)} onFocus={() => setActive(true)} />
    </div>
  );
}

export default Search;
