// search app
import { useEffect, useState } from "react";
import List from "./List";
import "./styles.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ListItems, setListItems] = useState(List);

  useEffect(() => {
    setListItems(
      searchTerm !== ""
        ? List.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : List
    );
  }, [searchTerm]);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Search App</h2>
      <div
        className="searchInput"
        style={{ textAlign: "center", fontSize: "20px" }}
      >
        <label>
          Search:
          <span>
            <input
              type="text"
              placeholder="Enter Text to Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </span>
        </label>
        <p style={{ textAlign: "center", fontWeight: 600 }}>
          {ListItems.length} records found
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
          </tr>
        </thead>
        {ListItems.length ? (
          <tbody>
            {ListItems.map((listItem) => {
              return (
                <tr key={listItem.id}>
                  <td>{listItem.id}</td>
                  <td>{listItem.name}</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tr>
            <td colSpan="2" style={{ textAlign: "center" }}>
              No Record Found!
            </td>
          </tr>
        )}
      </table>
    </>
  );
};

export default App;
