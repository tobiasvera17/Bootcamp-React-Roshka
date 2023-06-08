import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
        <ReactPaginate
          className="pagination justify-content-center gap-2 my-5"
          nextLabel="Next"
          previousLabel="Prev"
          nextClassName="btn btn-primary active"
          previousClassName="btn btn-primary active"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          pageCount={info?.pages}
          activeClassName="active"
          onPageChange={(page) => {setPageNumber(page.selected + 1)}}
          forcePage={pageNumber===1 ? 0 : pageNumber - 1}
        />
  );
};

export default Pagination;
