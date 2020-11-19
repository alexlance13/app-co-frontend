import React, { useEffect, useState } from 'react';
import { Wrapper, Arrow } from './styles';

const Pagination: React.FC<PropsType> = ({ itemsPerPage, totalRowsCount, paginate, setPage, rowsCount, currentPage }) => {
  const pageNumbers: Array<number> = [];
  const totalPages = Math.ceil(totalRowsCount / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (currentPage < 5) setDirection(1);
    if (currentPage > totalPages - 5) setDirection(-1);
  }, [currentPage, totalPages]);

  const arrowClickHandler = (n: number) => {
    setPage((prevState: number): number => {
      if (prevState + n < 1 || prevState + n > Math.ceil(rowsCount / itemsPerPage)) return prevState;
      return prevState + n;
    });
    if ((currentPage >= 5 && n < 0) || (n > 0 && currentPage <= totalPages - 5)) setDirection(n);
  };

  return (
    <Wrapper>
      <ul>
        <li key='leftArrow'>
          <div onClick={() => arrowClickHandler(-1)}>
            <Arrow right={false} blue={currentPage > 1} />
          </div>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={`page ${number === currentPage ? 'active' : ''}`}
            style={
              (direction > 0 && number >= currentPage && number <= currentPage + 4) ||
              (direction < 0 && number <= currentPage && number >= currentPage - 4)
                ? { display: 'grid' }
                : { display: 'none' }
            }>
            {number}
          </li>
        ))}
        <li key='rightArrow'>
          <div onClick={() => arrowClickHandler(1)}>
            <Arrow right blue={currentPage < totalPages} />
          </div>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Pagination;

type PropsType = {
  itemsPerPage: number;
  totalRowsCount: number;
  currentPage: number;
  rowsCount: number;
  paginate: (number: number) => void;
  setPage: any;
  setItemsPerPage: (rowsPerPage: number) => void;
};
