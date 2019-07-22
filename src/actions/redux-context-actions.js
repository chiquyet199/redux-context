import store from '../store'
import axios from 'axios'
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY'
export const NAVIGATE = 'NAVIGATE'
export const CHECKOUT = 'CHECKOUT'

export const SETPRODUCTS = 'SETPRODUCTS'
export const GETPRODUCTS = 'GETPRODUCTS'

const setProducts = products => {
  store.dispatch({
    type: SETPRODUCTS,
    payload: products,
  })
}

const getProducts = product => {
  axios
    .get(
      'https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2'
    )
    .then(x => {
      const products = x.data.data.map(function(p) {
        return {
          id: p.product_id,
          name: p.name,
          price: p.price,
          img: p.img_url,
        }
      })
      store.dispatch({
        type: SETPRODUCTS,
        payload: products,
      })
    })
}

const addProduct = product => {
  store.dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  })
}

const navigate = toPage => {
  store.dispatch({
    type: NAVIGATE,
    payload: toPage,
  })
}

const checkout = () => {
  store.dispatch({type: CHECKOUT})
}

const removeCartItem = id => {
  store.dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  })
}

const changeCartQuantity = (id, newQuantity) => {
  store.dispatch({
    type: CHANGE_CART_QUANTITY,
    payload: {id, quantity: newQuantity},
  })
}

export default {
  setProducts,
  addProduct,
  navigate,
  checkout,
  removeCartItem,
  changeCartQuantity,
  getProducts,
}
