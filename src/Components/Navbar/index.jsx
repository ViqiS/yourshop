import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-amber-100'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
        YourStore
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          mail@ejemplo.com
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-account'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Sign in
          </NavLink>
        </li>
        <li 
        className='flex items-center cursor-pointer'
        onClick={(event) => {
          if (context.isCheckoutSideMenuOpen) {
            context.closeCheckoutSideMenu(); // Cierra el menú si está abierto
          } else {
            context.openCheckoutSideMenu(); // Abre el menú si está cerrado
          }
        }}>
        <ShoppingBagIcon className='h-6 w-6 text-black'/> 
        <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;