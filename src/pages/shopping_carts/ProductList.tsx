import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {RootStore} from '../../stores';
import utilFormart from '../../utils/format';
import actions  from '../../stores/actions'; 
export default function ProductList() {
  const dispatch = useDispatch();
  const productStore = useSelector(store => (store as RootStore).productStore)

  return (
    <div className="listProduct">
    <div className="titles">Product List</div>
    {
      productStore.data.map((product, index) => (
        <div key={Date.now() * Math.random()} className="productCards">
        <div className="productCards_avatar">
          <img className="avatar_img" src={product.avatar} />
        </div>
        <div className="productCards_des">
          <span className="des_productName">{product.name}</span>
          <span className="des_productPrice">
            {utilFormart.convertToVND(product.price)}
          </span>
          <span className="des_detail">{product.des}</span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(actions.cartAction.addToCart({
              id: Date.now() * Math.random(),
              productId: product.id,
              quantity: Number((e.target as HTMLFormElement).quantity.value ?? 1)
            }))
          }}
          className="productCards_buytools"
        >
          <input
            defaultValue={1}
            className="buytools_amounts"
            name="quantity"
            type="number"
            min="1"
            max="999"
          />
          <button
            type="submit"
            className="btn btn-danger buytools_amounts-buyBtn"
          >
            Mua Ngay
          </button>
        </form>
      </div>
      ))
    }

  </div>
  )
}
