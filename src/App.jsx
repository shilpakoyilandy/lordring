import SearchForm from "./components/SearchForm";
import { charactorList } from "./hooks/charactor";
import Table from "./components/Table";
import { useState } from "react";
import Pagination from "./components/Pagination";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
function App() {
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
      <Routes>
        <Route path="/customer/:id" element={<Details />} />
      </Routes>
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

export default App;
