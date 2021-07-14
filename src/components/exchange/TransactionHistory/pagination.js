import React from 'react';
import { Image, Pagination } from 'react-bootstrap';
import ArrowRight from 'static/images/arrow-right.png';

const PaginationComp = () => {
  let active = 2;
  let values = [1, 2, 3, 4, 9];
  let items = [];
  for (let number = 0; number < values.length; number++) {
    if (number === 3) {
      items.push(<Pagination.Ellipsis />);
    } else {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {values[number]}
        </Pagination.Item>
      );
    }
  }
  return (
    <>
      <Pagination>{items}</Pagination>{' '}
      <div className="page-next circle bg-blue-2">
        <Image src={ArrowRight} />
      </div>
    </>
  );
};

export default PaginationComp;
