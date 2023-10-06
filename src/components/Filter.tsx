import { useState } from 'react';

export type FilterType = 'inprogress' | 'done' | 'all';

function Filters(params: { onFilterChange: (filter: FilterType) => void }) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  const onButtonClick = (filter: FilterType) => {
    setSelectedFilter(filter);
    params.onFilterChange(filter);
  };

  return (
    <div className="btn-group">
      <button
        className={
          selectedFilter == 'inprogress'
            ? 'btn btn-info'
            : 'btn btn-outline-info'
        }
        onClick={() => {
          onButtonClick('inprogress');
        }}
      >
        In Progress
      </button>
      <button
        className={
          selectedFilter == 'done'
            ? 'btn btn-success'
            : 'btn btn-outline-success'
        }
        onClick={() => {
          onButtonClick('done');
        }}
      >
        Done
      </button>
      <button
        className={
          selectedFilter == 'all'
            ? 'btn btn-primary'
            : 'btn btn-outline-primary'
        }
        onClick={() => {
          onButtonClick('all');
        }}
      >
        All
      </button>
    </div>
  );
}

export default Filters;
