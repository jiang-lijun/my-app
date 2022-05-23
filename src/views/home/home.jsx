import './home.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.setState = {
            token: localStorage.getItem('token')
        }
        this.menuType = this.menuType.bind(this)
    }
    menuType(type){
        console.log(type)
    }
    render() {
        let {token} = this.state
        const menu = <Menu>
            <Menu.Item>tina</Menu.Item>
            <Menu.Item>退出登录</Menu.Item>
        </Menu>;
      const btn = <Link to="/login">
            <div className="right">
                <h3>登录</h3>
            </div>
        </Link>
        return <div className='home'>
            <div className='header'>
                <div className="left">
                    <h3>Home</h3>
                </div>
                
            </div>
            <div className='main'>
                <Link to="/list">列表</Link>
            </div>
        </div>
    }
}
export default Home