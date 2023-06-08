import ReactPaginate from "react-paginate";

// const Pagination = ({ info, pageNumber, setPageNumber }) => {
const Pagination = ({ setItemOffSet, setEndOffSet, itemsPerPage, length }) => {
  const pageCount = Math.ceil(length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // console.log(length)
    // Nuevo inicio
    const newOffset = (event.selected * itemsPerPage) % length;
    // Nuevo final
    const endOffSet = newOffset + itemsPerPage;

    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );

    setItemOffSet(newOffset);
    setEndOffSet(endOffSet);
  };

  return (
    <ReactPaginate
      className="pagination fs-3 justify-content-center  my-5"
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      class
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link px-4 fs-3"
      previousClassName="page-item"
      previousLinkClassName="page-link px-4 fs-3"
      nextClassName="page-item"
      nextLinkClassName="page-link px-4 fs-3"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
    // <ReactPaginate
    //   className="pagination justify-content-center gap-2 my-5"
    //   nextLabel=">"
    //   previousLabel="<"
    //   // nextClassName="btn btn-primary"
    //   // previousClassName="btn btn-primary"
    //   pageClassName="page-item"
    //   pageLinkClassName="page-link"
    //   pageCount={pageCount}
    //   activeClassName="active"
    //   // onPageChange={(page) => {setPageNumber(page.selected + 1)}}
    //   onPageChange={handlePageClick}
    //   // forcePage={pageNumber===1 ? 0 : pageNumber - 1}
    // />
  );
};

export default Pagination;
