import { useState } from 'react';
import {Button, Menu} from 'antd';
import {DatabaseOutlined, SettingOutlined, CreditCardOutlined} from '@ant-design/icons';
import "./index.css";


const items = [
{
    key: 'board',
    label: 'Kabinet Board',
    icon: <DatabaseOutlined/>
},
{
    key: 'cards',
    label: 'Cards',
    icon: <CreditCardOutlined />
},
{
    key: 'projectSetting',
    label: 'Project Setting',
    icon: <SettingOutlined />
},

];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
   const handleChangedCollapsed = () =>{
     setCollapsed(!collapsed);
    }
    return (
        <div className='sidebar'>
            <Button onClick={handleChangedCollapsed}>
                {collapsed ? 'open' : 'close'}
            </Button>
       <Menu
         items={items}
         mode='inline'
         inlineCollapsed={collapsed}
         />
        </div>
    )
}
export default Sidebar;