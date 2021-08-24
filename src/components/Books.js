import React from 'react';

const Books = () => {
  return (
    <div>
      <div>
        <h2>Books</h2>
        <ul>
          <BookItem />
        </ul>
      </div>
      <div>
        <AddBooks />
      </div>
    </div>
  );
};

export default Books;
