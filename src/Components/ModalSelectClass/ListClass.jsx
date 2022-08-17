import classNames from 'classnames/bind';
import styles from '~/sass/Components/_ListClass.module.scss';

import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';

import BooksByAge from './BooksByAge';
import { setModalSelect } from '~/Components/ModalSelectClass/HandleModalSlice';
import * as GetAllClass from '~/services/GetAllClass';
import * as GetAllBook from '~/services/GetAllBook';

import CardClass from './CardClass';
const cx = classNames.bind(styles);

function ListClass() {
  const ref = useRef();
  const ref1 = useRef();
  const [listclass, setListClass] = useState();
  const [listbook, setListBook] = useState();
  const dispatch = useDispatch();

  // Call api getClass
  useEffect(() => {
    const fetchApi = async () => {
      const res = await GetAllClass.getAllClass();
      setListClass(res);
    };
    fetchApi();
  }, []);

  // Call api getBook
  useEffect(() => {
    const fetchApi = async () => {
      const res = await GetAllBook.getAllBook();
      setListBook(res);
    };
    fetchApi();
  }, []);

  // handle CloseModal
  useEffect(() => {
    const hideMenuMb = (e) => {
      console.log('ref.current.contains(e.target)', ref.current.contains(e.target));
      if (ref.current.contains(e.target) && ref1.current.contains(e.target)) {
        dispatch(setModalSelect(false));
      }
    };
    document.body.addEventListener('click', hideMenuMb);
    return () => document.body.removeEventListener('click', hideMenuMb);
  }, []);

  return listclass !== undefined && listbook !== undefined ? (
    <div ref={ref} className={cx('wrapper')}>
      <div className={cx('icon-close')} ref={ref1}>
        <AiOutlineClose />
      </div>

      <CardClass listClass={listclass !== undefined ? listclass : ''} title="Khối mầm non" />
      <BooksByAge listBook={listbook !== undefined ? listbook : ''} />
    </div>
  ) : null;
}

export default ListClass;
