import { Badge } from 'antd'
import { Link } from 'react-router-dom'

import './Header.css' // Добавим файл для стилей
import { cartStore } from '../../stores/cartStore/cartStore'
import { observer } from 'mobx-react'
import { DeleteOutlined, HomeOutlined, UnorderedListOutlined, WindowsOutlined } from '@ant-design/icons'


const Header = observer(() => {
  
  return (
    <header className="header">
      <h1 className="logo">Спорт магазин</h1>
      <nav className="nav">
        <Link to="/"><HomeOutlined /> Главная</Link>
        <Link to="/products"><WindowsOutlined /> Товары</Link>
        <Link to="/catalog"><UnorderedListOutlined /> Каталог</Link>
        <Link to="/cart"><DeleteOutlined /> Корзина
        <Badge
          className="site-badge-count-109"
          count={cartStore.total.totalCount} offset={[4, -15]}
          style={{ backgroundColor: 'red' }}
        />
        </Link>
      </nav>
    </header>
  )
})

export default Header
