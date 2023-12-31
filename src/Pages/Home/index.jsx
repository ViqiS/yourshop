import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'


function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
        ))
        )
      } else {
        return (
          <div 
          className='text-center'
          >We don't have anything with this name</div>
        )
      } 
  }

  return (
    <Layout >
      <div className='flex items-center justify-center relative w-80 mb-5 top'>
      <h1 className='font-medium text-2xl'>Welcome to shop</h1>
      </div>
      <input 
      className='text-center text-amber-400 border border-black rounded-lg w-80 p-2 mb-4 focus:outline-none'
      onChange={(event) => context.setSearchByTitle(event.target.value)}
      type='text'
      placeholder='Search a product' />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {renderView()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
