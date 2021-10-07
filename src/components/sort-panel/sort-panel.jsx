import React from 'react';

function SortPanel() {
  return (
    <div className="sort-panel">
      <p className="sort-panel__title">Сортировать:</p>
      <div className="sort-panel__content">
        <div className="sort-panel__type">
          <button className="sort-panel__type-btn" type="button">по цене</button>
          <button className="sort-panel__type-btn" type="button">по популярности</button>
        </div>
        <div className="sort-panel__direction">
          <button className="sort-panel__direction-btn sort-panel__direction-btn--up" type="button" aria-label="по возрастанию"></button>
          <button className="sort-panel__direction-btn sort-panel__direction--down" type="button" aria-label="по убыванию"></button>
        </div>

      </div>
    </div>


  );
}

export default SortPanel;
