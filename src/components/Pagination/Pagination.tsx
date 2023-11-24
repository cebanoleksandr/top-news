import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './Pagination.scss';

type Props = {
  currentPage: number;
  totalPages: number;
  rest: string;
  onChangePageHandler: (p: number) => void;
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  rest,
  onChangePageHandler,
}) => {
  const prevButton = '<';
  const nextButton = '>';

  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  pages = pages.filter(
    (page) => currentPage - 1 <= page && page <= currentPage + 1,
  );

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <NavLink
          to={{
            pathname: '/',
            search: `?page=${currentPage - 1}${rest}`
          }}
          className="page-button left"
          // onClick={() => onChangePageHandler(currentPage - 1)}
        >
          {prevButton}
        </NavLink>
      )}

      {!pages.includes(1) && (
        <>
          <NavLink
            key={1}
            to={{
              pathname: '/',
              search: `?page=${1}${rest}`
            }}
            className={classNames('page-button', {
              'is-active': currentPage === 1,
            })}
            // onClick={() => onChangePageHandler(1)}
          >
            1
          </NavLink>
          ...
        </>
      )}

      {pages.map((page) => (
        <NavLink
          key={page}
          to={{
            pathname: '/',
            search: `?page=${page}${rest}`
          }}
          className={classNames('page-button', {
            'is-active': currentPage === page,
          })}
          // onClick={() => onChangePageHandler(page)}
        >
          {page}
        </NavLink>
      ))}

      {!pages.includes(totalPages) && (
        <>
          ...
          <NavLink
            key={totalPages}
            to={{
              pathname: '/',
              search: `?page=${totalPages}${rest}`
            }}
            className={classNames('page-button', {
              'is-active': currentPage === totalPages,
            })}
            // onClick={() => onChangePageHandler(totalPages)}
          >
            {totalPages}
          </NavLink>
        </>
      )}

      {currentPage < totalPages && (
        <NavLink
          to={{
            pathname: '/',
            search: `?page=${currentPage + 1}${rest}`
          }}
          className="page-button right"
          // onClick={() => onChangePageHandler(currentPage + 1)}
        >
          {nextButton}
        </NavLink>
      )}
    </div>
  );
};
