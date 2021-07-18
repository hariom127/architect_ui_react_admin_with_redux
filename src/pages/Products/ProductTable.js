import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { useSelector } from "react-redux";

function ProductTable() {
  const products = useSelector((state) => state.allProducts.products);
  const renderlist = products.map((product) => {
    const { id, title, category, image, price } = product;
    // console.log(product);
    return (
      <tr className="TestClas-Id" key={id}>
        <td>
          <img src={image} alt="" height="80" width="80" />
        </td>
        <td>{title}</td>
        <td>{price}</td>
        <td>{category}</td>
        <td>
          <Link to={`product/${id}`}>
            <ButtonComponent
              class_name="mb-2 mr-2 btn btn-primary"
              name=""
              icon={<i className="fas fa-edit"></i>}
            />
          </Link>
          <ButtonComponent
            class_name="mb-2 mr-2 btn btn-danger"
            name=""
            icon={<i className="fas fa-trash"></i>}
          />
        </td>
      </tr>
    );
  });
  return <>{renderlist}</>;
}

export default ProductTable;
