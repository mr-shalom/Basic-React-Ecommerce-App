function Sort({ sortByCategory, category, productsCategory }) {
  let categories = Array.from(productsCategory);

  function multipleWords(word) {
    let firstWord = word[0].charAt(0).toUpperCase() + word[0].slice(1);
    let nextWord = word[1]?.charAt(0).toUpperCase() + word[1]?.slice(1);
    return `${firstWord} ${nextWord}`;
  }

  const singleWord = (word) =>
    word[0].charAt(0).toUpperCase() + word[0].slice(1);

  function capitalizeWord(word) {
    let splittedWord = word.split(" ");
    let result = undefined;
    if (splittedWord.length > 1) result = multipleWords(splittedWord);
    else result = singleWord(splittedWord);
    return result;
  }

  return (
    <form className="sort-form">
      <select
        name=""
        id=""
        className="select"
        value={category}
        onChange={(e) => sortByCategory(e.target.value)}
      >
        <option value="">All Products</option>;
        {categories.map((category) => {
          capitalizeWord(category);

          return (
            <Option
              key={category}
              value={category}
              text={capitalizeWord(category)}
            />
          );
        })}
        <Option />
      </select>
    </form>
  );
}

function Option({ value, text }) {
  return <option value={value}>{text}</option>;
}

export default Sort;
