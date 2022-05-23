import './login.css'
import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {login} from '../../http/api'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '123456',
            password: '123456'
        }
    }
    post = () => {
        
    }
    onFinish = () => {
        login(this.state).then(res => {
            console.log(res)
            localStorage.setItem('token',res.data.token)
            // this.props.history.push('/')
        })
        // let res = this.post()
        // if (res.status === 200) {
        //     message.success(res.data.data.msg);
        //     localStorage.setItem('token',res.data.data.token)
        //     this.props.history.push('/')
        // } else {
        //     message.error(res.data.data.msg);
        // }
      };
    
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    getValue = (e, name) => {
        let data = {}
        data[name] = e.target.value
        this.setState(data)
    }
    render() {
        return <div className='login'>
            <div className='box'>
                <h1 className='title'>登录</h1>
                <div className="content">
                123456
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            label="账号"
                            name="username"
                            rules={[{ required: true, message: '请输入账号～' },
                            { min: 6, message: '账号至少6个字符～' }]}
                        >
                            <Input onChange={(e) => {this.getValue(e,'username')}}/>
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码～' },
                            { min: 6, message: '密码至少6个字符～' }]}
                        >
                            <Input.Password onChange={(e) => {this.getValue(e,'password')}}/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
                            <Checkbox>已阅读《协议》</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                            <Button type="primary" htmlType="submit" className='sub-btn'>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    }
}
export default Login