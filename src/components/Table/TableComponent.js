import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
// import {Button, Modal} from 'react-bootstrap';
// import ModelComponent from "../Button/Models/ModelComponent";

function TableComponent() {
  return (
    <div className="card mb-3">
      <div className="card-header-tab card-header">
        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button> */}
          <i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Easy Dynamic Tables
        </div>
      </div>
      <div className="card-body">
        <table
          style={{ width: "100%" }}
          id="users"
          className="table table-hover table-striped table-bordered"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>
                <ButtonComponent
                  name="Edit"
                  icon={<i className="fas fa-edit"></i>}
                  class_name="mb-2 mr-2 btn-transition btn btn-outline-primary"
                />
                <ButtonComponent
                  name="Delete"
                  icon={<i className="fas fa-trash"></i>}
                  class_name="mb-2 mr-2 btn-transition btn btn-outline-danger"
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
