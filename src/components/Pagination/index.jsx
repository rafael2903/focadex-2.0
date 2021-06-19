import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { PagesContainer, Page } from './styles';

const changePage = (action, value, setCurrentPage) => {
  window.scrollTo(0, 0);
  setCurrentPage((prev) => (action === 'next' ? prev + value : prev - value));
};

const analyser = (prevPage, currentPage, setCurrentPage, nextPage) => {
  if (!prevPage) {
    return (
      <>
        <IoIosArrowBack size={22} style={{ opacity: 0 }} />

        <Page className="current">{currentPage}</Page>
        <Page onClick={() => changePage('next', 1, setCurrentPage)}>
          {nextPage}
        </Page>
        <Page onClick={() => changePage('next', 2, setCurrentPage)}>
          {nextPage + 1}
        </Page>

        <IoIosArrowForward
          size={22}
          color="#BEBEBE"
          style={{ cursor: 'pointer' }}
          onClick={() => changePage('next', 1, setCurrentPage)}
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
          onClick={() => changePage('prev', 1, setCurrentPage)}
        />

        <Page onClick={() => changePage('prev', 2, setCurrentPage)}>
          {prevPage - 1}
        </Page>
        <Page onClick={() => changePage('prev', 1, setCurrentPage)}>
          {prevPage}
        </Page>
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
        onClick={() => changePage('prev', 1, setCurrentPage)}
      />

      <Page onClick={() => changePage('prev', 1, setCurrentPage)}>
        {prevPage}
      </Page>
      <Page className="current">{currentPage}</Page>
      <Page onClick={() => changePage('next', 1, setCurrentPage)}>
        {' '}
        {nextPage}
      </Page>

      <IoIosArrowForward
        size={22}
        color="#BEBEBE"
        style={{ cursor: 'pointer' }}
        onClick={() => changePage('next', 1, setCurrentPage)}
      />
    </>
  );
};

const Pagination = ({ prevPage, currentPage, setCurrentPage, nextPage }) => {
  return (
    <>
      <PagesContainer>
        {analyser(prevPage, currentPage, setCurrentPage, nextPage)}
      </PagesContainer>
    </>
  );
};

export default Pagination;
