import img from "./assets/1.png"
import Books from "./Pages/HomePage";
import {books} from "./constants/mockData"
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      {/* <h1>Book App Starting files</h1> */}
      {/* <img src="/1.png" /> */}
      {/* <img src={img}/> */}
      {/* {books.map((book)=>(<p>{book.title}</p>))} */}
      <Layout>
        <Books />
      </Layout>
    </>
  );
}

export default App;
