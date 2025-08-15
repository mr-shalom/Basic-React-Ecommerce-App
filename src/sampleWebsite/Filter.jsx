function Filter({ filterQuery, query }) {
  return (
    <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="filter"
        placeholder="Enter item to search..."
        value={query}
        onChange={(e) => filterQuery(e.target.value.toLowerCase())}
      />
    </form>
  );
}

export default Filter;
