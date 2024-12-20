import { CarryOutTwoTone, CloseOutlined } from "@ant-design/icons";
import { Form, Input, Modal, Typography } from "antd"
import { useForm, useWatch } from "antd/es/form/Form";
import { observer } from "mobx-react"
import { useMemo } from "react";
import { emailRegex, validatorEmail } from "./constants";



export const CartModal = observer(({visible, setVisible}: 
    {visible: boolean, setVisible: (value: boolean) => void})=>{

    const [form] = useForm()
    const email = useWatch('email', form)
    const title = useWatch('yourName', form)

    const isCorrectEmail = useMemo(() => {
        return emailRegex.test(email)
    }, [email])

    const isDisableOkButton = useMemo(() => {
        return !isCorrectEmail
    }, [email, isCorrectEmail])

    const isDisableOkButtonName = useMemo(() => {
        return !(title?.trim() && title?.trim()?.length>3)
    }, [title ])

    const handleCancel = () => {
        setVisible(false)
        form.resetFields()
    }


    const handleOk = async () => {
        const values= await form.validateFields()
        console.log('values', values);
        
        setVisible(false)

        Modal.info({
            title: 'Данные покупателя!',
            content: (
              <div>
                <p>Name: <strong>{values.yourName}</strong></p>
                <p>E-mail: <strong>{values.email}</strong></p>
                                <p>Данные и товары были отправлены!</p>
                <p>Проверьте вашу почту</p>
              </div>
            ),
            onOk() {
              console.log('Данные и товары были отправлены!')
            }
          })
    }



    return <Modal
        width={'30vw'}
        maskClosable
        open={visible}
        title={<Typography.Title level={4}><CarryOutTwoTone/> Оформление заказа</Typography.Title>}
        onOk={handleOk} okButtonProps={{disabled: isDisableOkButton || isDisableOkButtonName}}
        onCancel={handleCancel}
        centered
    >
        <Form form={form}>
            <Form.Item label='Name' name='yourName' rules={[{required: true, message: 'Name is required!'}]}>
                <Input />
            </Form.Item>
            <Form.Item label='E-mail' name='email' rules={validatorEmail()}>
                <Input />
            </Form.Item>
        </Form>
    </Modal> 
})