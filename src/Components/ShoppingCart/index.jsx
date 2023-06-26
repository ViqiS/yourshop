import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import {ShoppingBagIcon} from '@heroicons/react/24/solid'

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext)

  const openCheckoutSideMenu = () => {
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  return (
    <div className='relative flex  gap-0.5 items-center' 
    onClick={(event) => {
      if (context.isCheckoutSideMenuOpen) {
        context.closeCheckoutSideMenu(); // Cierra el menú si está abierto
      } else {
        context.openCheckoutSideMenu(); // Abre el menú si está cerrado
      }
    }}>
    <ShoppingBagIcon className='w.6 h-6 fill-none stroke-black cursor-pointer'/>
    <div className='absolute bottom-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white'>
    {context.cartProducts.length}
    </div>
    </div>
  )
}

export default ShoppingCart