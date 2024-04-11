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
                <div className="contact-item"><Button icon={<LinkedinOutlined/>} a href="https://www.linkedin.com/in/amine-fakhri-388844235/"></Button>
                </div>
                <div className="contact-item"><Button icon={<GithubOutlined/>} a href="https://github.com/amineF78"></Button>
                </div>
            </div>
        </div>
        </div>
        <div className="right">
            <Button className="contact-btn" icon={<MessageOutlined/>} a href="mailto:aminefakhri84@gmail.com">Contactez-Moi</Button>
        </div>

    </header>
  )
}


export default HeaderComp

