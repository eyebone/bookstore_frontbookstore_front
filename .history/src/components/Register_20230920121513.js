import {Button, Form, Input, Menu, message, Modal, Select} from 'antd';
import React, { useState } from 'react';
import TextArea from "antd/es/input/TextArea";

const Register = (props) =>
{
    const [fields, setFields] = useState([]);
    const [visiable, setVisiable] = useState(false);
    const [form] = Form.useForm();
    // 打开弹窗
    const open = () => {
        setVisiable(true);
    };
    //关闭弹窗
    const close = () => {
        setVisiable(false);
    };
    //点击确定提交表单
    const submit = ()=>{
        form.submit()
        console.log("value")
    }
    // 提交后获取表单数据，请求接口，重置表单并关闭
    const onSubmit = (values) =>{
        console.log("values",values)
        if(values.password !== values.repassword){
            message.error("两次输入密码不同")
        }
        else{
            
        const { username, password, email } = values;
        const newUserObject = { username, password, email };
        const url = `http://localhost:8080/adduser?username=${username}&password=${password}&email=${email}`;


        console.log("newUser",newUserObject);
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            // body:JSON.stringify(newUserObject)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Data received from backend:", data);
                if(data === true){
                message.success("注册成功")
                form.resetFields();
                close()}
                else{
                    message.error("用户名已存在")
                }
            }).catch(function (ex) {
            console.log('parsing failed', ex)
        })


        }
    }
    return (

        <div>
            <div className="text-center">
                <Button type="text" onClick={open}>
                    register now!
                </Button>
            </div>
            <Modal
                wrapClassName="modal-wrap"
                okText="register"
                cancelText="cancel"
                cancelButtonProps={{ shape: 'round' }}
                okButtonProps={{ shape: 'round' }}
                width={600}
                visible={visiable}
                title="new user register"
                onCancel={close}
                onOk={submit}
            >
                <div className="form">
                    <Form
                        onFieldsChange={(_, allFields) => {
                            setFields(allFields);
                        }}
                        form={form}
                        fields={fields} labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onFinish={onSubmit}>
                        <Form.Item
                            label="username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="repeat passwd"
                            name="repassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the password again!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the email!',
                                },

                                {
                                    type: 'email',
                                },

                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>

                </div>
            </Modal>
        </div>
    );

}

export default Register;