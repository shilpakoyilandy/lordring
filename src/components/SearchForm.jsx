export default function SearchForm({ formField, setFormField }) {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormField((v) => ({ ...v, [name]: value }));
  };
  return (
    <div className="container mt-5 ring ring-gray-100 border-inherit mx-auto">
      <div className="flex p-4 justify-center border-b-2 font-bold text-lg">
        <h1>Characters</h1>
      </div>
      <div className="flex justify-between mb-4 mt-4 p-4">
        <div className="flex items-center gap-2 w-1/2">
          <label>Search</label>{" "}
          <input
            type="text"
            name="name"
            value={formField.name}
            onChange={handleChange}
            placeholder="by name"
            className="input input-bordered w-10/12 "
          />
        </div>
        <div className="flex w-1/2 justify-end items-center gap-2">
          {" "}
          <label>Sort by</label>
          <select
            className="select select-bordered   w-3/4"
            name="sort"
            value={formField.sort}
            onChange={handleChange}
          >
            <option disabled selected>
              Select
            </option>
            <option value="asc">Asending</option>
            <option value="desc">Desending</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between w-full pl-4 pr-4 pb-3">
        <div className="flex items-center gap-2 w-2/5">
          {" "}
          <label>Race</label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="race"
            onChange={handleChange}
            value={formField.race}
          >
            <option disabled selected>
              Select Race
            </option>
            <option value="Hobbit">Hobbit</option>
            <option value="Human">Human</option>
          </select>
        </div>
        <div className="flex items-center gap-2 w-2/5">
          <label>Gender</label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="gender"
            onChange={handleChange}
            value={formField.gender}
          >
            <option disabled selected>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
}
