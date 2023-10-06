import SearchForm from "../components/SearchForm";
import { charactorList } from "../hooks/charactor";
import Table from "../components/Table";
import { useState } from "react";
import Pagination from "../components/Pagination";

function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [formField, setFormField] = useState({
    name: "",
    race: "",
    gender: "",
    sort: "",
  });
  const { data } = charactorList(pageNumber, 10, formField);
  const handlePreviousClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNumber < data?.pages) {
      setPageNumber(pageNumber + 1);
    }
  };
  return (
    <>
     
      <SearchForm formField={formField} setFormField={setFormField} />
      <Table data={data} />
      <div>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPage={data?.pages}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
        />
      </div>
    </>
  );
}

export default Home;
