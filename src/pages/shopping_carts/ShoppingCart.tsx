import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {RootStore} from '../../stores';
import utilFormart from '../../utils/format';
import { Product } from '../../stores/slices/product.slice';
import actions  from '../../stores/actions'; 
export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cartStore = useSelector(store => (store as RootStore).cartStore)
  const productStore = useSelector(store => (store as RootStore).productStore)

  function getProductInfor(productId: number): Product | undefined {
    return productStore.data.find(product => product.id == productId);
  }
  useEffect(() => {
    console.log("cartStore", cartStore.data)
  }, [cartStore.data])
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
          {
            cartStore.data.map((item, index) => (
              <tr key={Date.now() * Math.random()}>
                <th scope="row">
                  <div className="table_content">1</div>
                </th>
                <td>
                  <div className="table_content">
                    {getProductInfor(item.productId)?.name ?? "Lỗi"}
                  </div>
                </td>
                <td>
                  <div className="table_content">
                    {utilFormart.convertToVND(getProductInfor(item.productId)?.price ?? 0)}
                  </div>
                </td>
                <td>
                  <div className="table_content">
                    <input
                      className="quantity"
                      style={{ textAlign: "center" }}
                      type="number"
                      defaultValue={item.quantity}
                      min={0}
                      max={
                        999
                      }
                    />
                  </div>
                </td>
                <td>
                  <div className="table_content">
                    {utilFormart.convertToVND((getProductInfor(item.productId)?.price ?? 0) * item.quantity)}
                  </div>
                </td>
                <td>
                  <div className="table_content actions">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={(e) => {
                        let quantity = Number((((e.target as HTMLElement).parentNode?.parentNode?.parentNode as HTMLElement).querySelector('.quantity') as HTMLInputElement).value)
                        dispatch(actions.cartAction.update({
                          ...item,
                          quantity: quantity
                        }))
                      }}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        if (window.confirm("Xóa ok?")) {
                          dispatch(actions.cartAction.delete(item.id))
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    {cartStore.data.length == 0 ? (
      <div className="table_emptyNoti">Empty product in your cart</div>
    ) : (
      <div className="table_emptyNoti">
      There are {cartStore.data.length} items in shopping cart
      <span
        style={{
          color: "red",
          fontSize: "20px",
          marginLeft: "10px",
          fontWeight: 900,
        }}
      >
        {
          utilFormart.convertToVND(
            cartStore.data.reduce((now, next) => {
              return now += ( getProductInfor(next.productId)?.price ?? 0 ) * next.quantity
            }, 0)
          )
        }
      </span>
    </div>
    )}
  </div>
  )
}
