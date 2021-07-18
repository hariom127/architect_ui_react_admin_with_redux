import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/action/productAction";

function ProductDetailsPage() {
  const { productId } = useParams();
  // console.log(productId);
  const dispatch = useDispatch();
  const fatchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("err", err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fatchProductDetails();
    return dispatch(removeSelectedProduct());
  }, [productId]);

  const product = useSelector((state) => state.product);
  console.log(product);
  const { id, title, image, category, price, description } = product;

  return (
    <div className="app-main__inner">
      <div className="tabs-animation">
        {Object.keys(product).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="card mb-3">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
                Products
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card-body">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <button className="btn btn-primary">${price}</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <br></br>
                <h2>{category}</h2>
                <p className="card-text">{description}</p>
              </div>
            </div>
            <Link to={`/products`} className="btn btn-warning">
              Back to Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
