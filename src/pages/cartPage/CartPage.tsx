import { ExclamationCircleOutlined, StepBackwardOutlined } from "@ant-design/icons";
import { Row, Typography, Col, Image, Button, List, Modal } from "antd";
import './CartPage.css'
import { productsStore } from "../../stores/products/productsStore";
import { cartStore } from "../../stores/cartStore/cartStore";
import { observer } from "mobx-react";
import { ICartProduct } from "stores/cartStore/types";
import { Link, useNavigate } from "react-router-dom";
import { CartModal } from "./CartModal";
import { useState } from "react";



// src/pages/CartPage.tsx
const CartPage = observer(() => {
  const [visible, setVisible] = useState(false)

  const navigate = useNavigate()

  const deleteCardFromCart = (card: ICartProduct) => {

    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
        content: <Typography.Paragraph>Вы уверены что хотите удалить товар?</Typography.Paragraph>,
        onOk() {
          cartStore.deleteCard(card)
        }
    })
    
  }

  const goToBack = () => {
    navigate(-1)
  }

  const onMinus = (card: ICartProduct) => {
    cartStore.minusTo(card)

  }

  const onPlus = (card: ICartProduct) => {
    cartStore.plusTo(card)
  }

  const onSend = () => {
    setVisible(true)
  }


  
  return (
      <Row>
        <Col span={24} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 20}} >
          <Typography.Title level={4}> Корзина</Typography.Title>
          <Typography.Link onClick={goToBack}> <StepBackwardOutlined/> Назад</Typography.Link>
        </Col>

        <Col span={24} style={{padding: 20}}>
          <Row justify={'space-between'} gutter={[5, 5]}>
            <Col span={15} style={{display: 'flex', flexDirection: 'column', gap: 10}}>

              { cartStore.products.length > 0 ? 
                cartStore.products.map(item => {
                  return (
                    <Row style={{width: '100%', padding: 10, border: '1px solid grey'}} 
                    justify={'space-between'} align={'middle'}>
                      <Col span={3} ><Image style={{width: '100%'}} src={item.urlImg}/></Col>
                      <Col span={4} style={{display: 'flex', gap: 10,alignItems: 'center'}}>
                        <Button disabled={item.count === 1} onClick={()=>onMinus(item)}>-</Button>
                        <span>{item.count}</span>
                        <Button onClick={()=>onPlus(item)}>+</Button>
                        </Col>
                      <Col span={6} style={{display: 'flex', alignItems: 'center'}}>
                        <Typography.Paragraph>{item.title}</Typography.Paragraph></Col>
                      <Col span={5}><Button type="dashed">
                        {productsStore.categories.find((c: any)=> c.id === item.categoryId)?.name}</Button></Col>
                      <Col span={3}><Button type="text">{item.price} руб.</Button></Col>
                      <Col span={3}><Button type="primary" onClick={()=> deleteCardFromCart(item)}>Удалить</Button></Col>
                    </Row>
                  )
                })
                : <div>
                  <Typography.Paragraph>Воспользуйтесь вкладкой <Link to={'/products'}>товары</Link> чтобы найти всё, что нужно :)
                    
                  </Typography.Paragraph>
                  <List dataSource={[]}/>
                </div> 
              }

            </Col>
            <Col span={7} style={{width: '100%', padding: 15, border: '1px solid grey', height: 175}}>
              <Row gutter={[12, 12]} align={'middle'} justify={'space-between'} >
               <Row>
               <Col span={20}><h3>Ваша корзина: {cartStore.total.totalCount} товар</h3></Col>
                <Col span={20}><h3>Товары {`(${cartStore.total.totalCount})`}: {cartStore.total.totalPrice} руб.
                 </h3></Col>
               </Row>
                <Col span={24}><Button onClick={onSend} disabled={!cartStore.total.totalCount === 0}
                style={{width: '100%'}}>Перейти к оформлению</Button></Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <CartModal visible={visible} setVisible={setVisible} />
        
      </Row>
    )
  })
  
  export default CartPage
  