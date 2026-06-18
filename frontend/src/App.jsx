import { useEffect, useState } from "react";

function App() {
const [data, setData] = useState(null);

useEffect(() => {
fetch("http://18.130.103.32:30202")
.then((response) => response.json())
.then((result) => setData(result))
.catch((error) => console.error(error));
}, []);

return (
<div style={{ padding: "40px", fontFamily: "Arial" }}>
  <h1>Zuri Market Frontend</h1>
  {data ? (
    <div>
      <h2>{data.message}</h2>
      <p>Store Name: {data.store}</p>
    </div>
  ) : (
    <p>Loading backend data...</p>
  )}
</div>
);
}

export default App;