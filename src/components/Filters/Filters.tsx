import './Filters.scss';

type Props = {
  query: string;
  setQuery: (v: string) => void;
  setIsFilter: (v: boolean) => void;
  searchHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Filters: React.FC<Props> = ({
  query,
  setQuery,
  searchHandler,
  setIsFilter
}) => {
  return (
    <div className="articles-header">
      <h1>Top Headlines</h1>

      <div className="filteres-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={searchHandler}
          />
        </div>

        <div className="filters-area" onClick={() => setIsFilter(true)}>
          Filters
        </div>
      </div>
    </div>
  );
};
