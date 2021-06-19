import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPage } from '../../store/pagination';
import { PagesContainer, Page } from './styles';

const analyser = () => {
  const dispatch = useDispatch();
  const { prevPage, currentPage, nextPage } = useSelector((state) => state);

  const changePage = (action, value) => {
    const newCurrentPage =
      action === 'next' ? currentPage + value : currentPage - value;
    window.scrollTo(0, 0);
    dispatch(setCurrentPage(newCurrentPage));
  };

  if (!prevPage) {
    return (
      <>
        <IoIosArrowBack size={22} style={{ opacity: 0 }} />

        <Page className="current">{currentPage}</Page>
        <Page onClick={() => changePage('next', 1)}>{nextPage}</Page>
        <Page onClick={() => changePage('next', 2)}>{nextPage + 1}</Page>

        <IoIosArrowForward
          size={22}
          color="#BEBEBE"
          style={{ cursor: 'pointer' }}
          onClick={() => changePage('next', 1)}
        />
      </>
    );
  }
  if (!nextPage) {
    return (
      <>
        <IoIosArrowBack
          size={22}
          color="#BEBEBE"
          style={{ cursor: 'pointer' }}
          onClick={() => changePage('prev', 1)}
        />

        <Page onClick={() => changePage('prev', 2)}>{prevPage - 1}</Page>
        <Page onClick={() => changePage('prev', 1)}>{prevPage}</Page>
        <Page className="current">{currentPage}</Page>

        <IoIosArrowForward size={22} style={{ opacity: 0 }} />
      </>
    );
  }
  return (
    <>
      <IoIosArrowBack
        size={22}
        color="#BEBEBE"
        style={{ cursor: 'pointer' }}
        onClick={() => changePage('prev', 1)}
      />

      <Page onClick={() => changePage('prev', 1)}>{prevPage}</Page>
      <Page className="current">{currentPage}</Page>
      <Page onClick={() => changePage('next', 1)}>{nextPage}</Page>

      <IoIosArrowForward
        size={22}
        color="#BEBEBE"
        style={{ cursor: 'pointer' }}
        onClick={() => changePage('next', 1)}
      />
    </>
  );
};

const Pagination = () => {
  return (
    <>
      <PagesContainer>{analyser()}</PagesContainer>
    </>
  );
};

export default Pagination;
