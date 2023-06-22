import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils/index'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '10.03.2023',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([]) /* A cart products lo dejamos con un array vacio para limpiar el carrito */
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <div>
          <XMarkIcon 
          className= 'h-6 w-6 text-black cursor-pointer'
          onClick={() => context.closeCheckoutSideMenu()}/>
        </div>
      </div>
      <div className='px-2  flex-1 overflow-y-scroll'>
      {
        context.cartProducts.map(product => (
          <OrderCard 
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
            />
        ))
      }
      </div>
      <div className='px-2 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total</span>
          <span className='font-medium text-1xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'> 
          <button 
          onClick={() => handleCheckout()}
          className='bg-black py-3 text-white w-full rounded-lg'>
          Checkout
          </button>
        </Link>
        
      </div>
    </aside>
  )
}

export default CheckoutSideMenu