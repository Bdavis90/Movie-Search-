import React from "react";

const Pagination = ({ pages, nextPage, currentPage }) => {
  const pageLinks = [];

  for (let i = 1; i <= pages + 1; i++) {
    pageLinks.push(i);
  }
  return (
    <>
      <ul className="page-list">
        {pageLinks.map(page => {
          const active = currentPage == page ? "active" : "";
          return (
            <li
              className={`page-list-pages`}
              key={page}
              onClick={() => nextPage(page)}
            >
              <a className={`page-number-${active}`} href="#">
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Pagination;
