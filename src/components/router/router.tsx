import { Routes, Route } from 'react-router-dom'
import Home from '../home/home'
import Help from '../help/help'
import MainLayout from '../layouts/main_layouts'
import Products from '../products/products'
import Product from '../products/product/product'
import NotFound from '../not_found/not_found'
import About from '../about/about'

const Router:React.FC = () => (
	<Routes>
		<Route path="/" element={<MainLayout />} >
			<Route index element={<Home/>} />
			<Route path='/help' element={<Help/>} />
			<Route path='/about' element={<About/>} />
			<Route path='/products' element={<Products/>} />
			<Route path='/products/:productId' element={<Product/>} />
			<Route path = '*' element={<NotFound/>} /> 
		</Route>
	</Routes>
)

export default Router
