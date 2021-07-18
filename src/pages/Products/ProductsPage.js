import React, { useEffect } from "react";
import ProductTable from "./ProductTable";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/action/productAction";
import axios from "axios";

function ProductsPage() {
  const dispatch = useDispatch();
  // call api and get data
  const fatchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(`Error ${err}`));
    console.log(response);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fatchProducts();
  }, []);

  return (
    <div className="app-main__inner">
      <div className="tabs-animation">
        <div className="card mb-3">
          <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
              Products
            </div>
          </div>
          <div className="card-body">
            <table
              style={{ width: "100%" }}
              id="example"
              className="table table-hover table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Caregory</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Product table start */}
                <ProductTable />
                {/* Product table end */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
