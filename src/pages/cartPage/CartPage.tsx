import { StepBackwardOutlined } from "@ant-design/icons";
import { Row, Typography, Col, Image, Button } from "antd";
import { useState } from "react";
import './CartPage.css'
import { productsStore } from "../../stores/products/productsStore";



// src/pages/CartPage.tsx
const CartPage: React.FC = () => {

  const [cartProducts, _] = useState([{
    categoryId:"1",
    id:"1",
    price:1781,
    sale:1000,
    title:"Свитшот ТЕЛОДВИЖЕНИЯ",
    urlImg:"https://ir.ozone.ru/s3/multimedia-1-w/wc1000/6971083196.jpg",
  },
  {
    categoryId:"3",
    id:"2",
    price:1781,
    sale:1000,
    title:"Свитшот dfhndfbfdsb",
    urlImg:"https://ir.ozone.ru/s3/multimedia-1-w/wc1000/6971083196.jpg",
  },
  {
    categoryId:"2",
    id:"2",
    price:1781,
    sale:1000,
    title:"Свитшот ",
    urlImg:"https://ir.ozone.ru/s3/multimedia-1-w/wc1000/6971083196.jpg",
  }])
    return (
      <Row>
        <Col span={24} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 20}} >
          <Typography.Title level={4}> Корзина</Typography.Title>
          <Typography.Link> <StepBackwardOutlined/> Назад</Typography.Link>
        </Col>

        <Col span={24} style={{padding: 20}}>
          <Row justify={'space-between'} gutter={[5, 5]}>
            <Col span={15}>

              {
                cartProducts.map(item => {
                  return (
                    <Row style={{width: '100%', padding: 10, border: '1px solid grey'}} 
                    justify={'space-between'} align={'middle'}>
                      <Col span={6} ><Image style={{width: '100%'}} src={item.urlImg}/></Col>
                      <Col span={6} style={{display: 'flex', gap: 10,alignItems: 'center'}}>
                        <Button>-</Button><span>0</span><Button>+</Button>
                        </Col>
                      <Col span={6} style={{display: 'flex', alignItems: 'center'}}>
                        <Typography.Paragraph>{item.title}</Typography.Paragraph></Col>
                      <Col span={4}><Button type="primary">{productsStore.categories.find(c => c.id === item.categoryId)?.name}</Button></Col>
                      <Col span={2}><Button type="text">{item.price}</Button></Col>
                    </Row>
                  )
                })
              }
            </Col>
            <Col span={7} style={{width: '100%', padding: 5, border: '1px solid grey'}}>2</Col>
          </Row>
        </Col>
        
      </Row>
    );
  };
  
  export default CartPage;
  