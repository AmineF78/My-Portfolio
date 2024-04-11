import React from 'react'
import { EnvironmentFilled, EnvironmentOutlined, LikeOutlined, LinkOutlined, MailOutlined, NumberOutlined, PhoneOutlined } from "@ant-design/icons";
import { educations } from "../data/data.jsx";
import { Button } from "antd";



const AsideComp = () => {
  return (
    <aside>
          <div className="contacts section">
            <div className="contact-item">
              <EnvironmentOutlined />
              <span>Magnanville, 78200</span>
            </div>
            <div className="contact-item">
              <PhoneOutlined />
              <span>0767497478</span>
            </div>
            <div className="contact-item">
              <MailOutlined />
              <span> <a href="mailto:aminefakhri84@gmail.com">aminefakhri84@gmail.com</a></span>
            </div>

          </div>

          <div className="skills section">
            <h2>Compétences</h2>
            <p>lorem</p>
            <div className="skills-list">
              <div className="skill-item">
                <span>PHP & SYMFONY</span>
                <div className="full">
                  <div className="percent-first">
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <span>HTML & CSS</span>
                <div className="full">
                  <div className="percent-second">
                  </div>
                </div>
              </div><div className="skill-item">
                <span>JAVASCRIPT & REACT</span>
                <div className="full">
                  <div className="percent-third">
                  </div>
                </div>
              </div><div className="skill-item">
                <span>WORDPRESS & SHOPIFY</span>
                <div className="full">
                  <div className="percent-fourth">
                  </div>
                </div>
              </div>
            </div>
            <Button type='link' icon={<LinkOutlined />}a href="https://github.com/amineF78">En savoir plus sur github</Button>
          </div>
          <div className="section">
            <h2>éducation</h2>

            {educations.map((item) => {
              return (<div className="education-item" key={item.id}>
                <h3>{item.title}</h3>
                <span>{item.name}</span>
              </div>
              );
            })
            }

          </div>
  <div className="section">
  <h2>Langues</h2>
  <div className="language-item">
    <h3>français</h3> 
    <span className="level"> C2 </span>
  </div>
  <div className="language-item">
    <h3>Anglais</h3> 
    <span className="level"> C1 </span>
  </div>
  <div className="language-item">
    <h3>arabe</h3> 
    <span className="level"> C1 </span>
  </div>
  <div className="language-item">
    <h3>japonais</h3> 
    <span className="level"> A2 </span>
  </div>

</div>
<div className='section'>
  <h2>Centres d'intéret</h2>
  <ul>
  <li>Sport</li>
  <li>Voyage</li>
  <li>jeux vidéo</li>
  <li>Automobile</li>
  <li>Moto</li>
      </ul>
</div>
        </aside>
  )
}

export default AsideComp