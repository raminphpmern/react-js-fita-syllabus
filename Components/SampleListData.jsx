// import logo from "./logo.svg";
// import "./App.css";
// import "./table.css";
import { useEffect, useState } from "react";

function SampleListData() {
  const [data, getData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {fetchData()}, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };
  
  return (
    <div>
      <h1>How Display API data in Table in React JS</h1>
      <tbody>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Descripation</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default SampleListData;
