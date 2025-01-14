const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const handelPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handelNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mx-auto gap-3 ">
      <button className="mr-2 btn btn-sm btn-ghost text-xs bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd] border-blue-400" onClick={handelPrevPage}>Prev</button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={
              page == currentPage
                ? "mr-2 btn btn-sm  text-xs  btn-info"
                : "mr-2 btn btn-sm btn-ghost text-xs bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd] border-blue-400"
            }
          >
            {page}
          </button>
        );
      })}
      <button className="mr-2 btn btn-sm btn-ghost text-xs bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd] border-blue-400" onClick={handelNextPage}>Next</button>
    </div>
  );
};
export default Pagination;
