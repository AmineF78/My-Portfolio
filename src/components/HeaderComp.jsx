import { GithubOutlined, LinkedinOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react';
import avatar from '../assets/images/avatar.png';
import {Button} from "antd";

const HeaderComp = () => {
  return (
    <header>
        <div className="left">
        <img src={avatar} alt="my picture"/>
        <div className="user-infos">
            <h1>Amine Fakhri</h1>
            <h3>Étudiant en développement Web Chez Digital Campus Paris.</h3>
            <div className="contacts">
                <div className="contact-item"><LinkedinOutlined/>
                </div>
                <div className="contact-item"><GithubOutlined/>
                </div>
            </div>
        </div>
        </div>
        <div className="right">
            <Button className="contact-btn" icon={<MessageOutlined/>}>Contactez-Moi</Button>
        </div>

    </header>
  )
}

export default HeaderComp