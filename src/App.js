import logo from './logo.svg';
import './App.css';
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const url = "http://3.86.102.124:8080/api/shippers";

  const [Data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      if (Data.length == 0) {
        axios
          .get(url, {
            "Content-Type": "application/xml; charset=utf-8"
          })
          .then(function (response) {

            setData(response.data.shipperList);

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    fetchData();
  })

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="card m-auto w-75 mt-5 ">
        <div className="card-head text-center bg-primary">
          <h1>Shipper Details</h1>
        </div>
        <div className="card-body d-flex ">
          <div className="p-2 flex-grow-1">
            <h3 className="text-center mb-3"> Add a New Shipper data</h3>
            <div>
              <form>

              </form>
            </div>
          </div>
          <div className="p-2 flex-grow-1">
            <h3 className="text-center mb-3">Existing shipper list</h3>
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Shipper Id</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {
                  Data &&
                  Data.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.shipperId}</td>
                      <td>{value.companyName}</td>
                      <td>{value.phone}</td>
                    </tr>
                  ))
                }

              </tbody>
            </table>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
