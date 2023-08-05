import React from 'react'

export default function ShoppingCart() {
  return (
    <div className="shoppingCart">
    <div className="titles">Shopping Cart</div>
    <div className="shoppingCart_items">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <div className="table_content">#</div>
            </th>
            <th scope="col">
              <div className="table_content">Product Name</div>
            </th>
            <th scope="col">
              <div className="table_content">Price</div>
            </th>
            <th scope="col">
              <div className="table_content">Quantity</div>
            </th>
            <th scope="col">
              <div className="table_content">Subtotal</div>
            </th>
            <th scope="col">
              <div className="table_content">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <th scope="row">
                  <div className="table_content">1</div>
                </th>
                <td>
                  <div className="table_content">
                    Sản Phẩm 1
                  </div>
                </td>
                <td>
                  <div className="table_content">
                    50 000
                  </div>
                </td>
                <td>
                  <div className="table_content">
                    <input
                      className="quantity"
                      style={{ textAlign: "center" }}
                      type="number"
                      defaultValue={1}
                      min={0}
                      max={
                        10
                      }
                    />
                  </div>
                </td>
                <td>
                  <div className="table_content">
                    100000
                  </div>
                </td>
                <td>
                  <div className="table_content actions">
                    <button
                      type="button"
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
        </tbody>
      </table>
    </div>
    {1 ? (
      <></>
    ) : (
      <div className="table_emptyNoti">Empty product in your cart</div>
    )}
    <div className="table_emptyNoti">
      There are 20 items in shopping cart
      <span
        style={{
          color: "red",
          fontSize: "20px",
          marginLeft: "10px",
          fontWeight: 900,
        }}
      >
        500000
      </span>
    </div>
  </div>
  )
}
