import "./App.css";
import HeaderComp from "./components/HeaderComp";
import { Button, Divider } from "antd";
import { EnvironmentFilled, EnvironmentOutlined, LikeOutlined, LinkOutlined, MailOutlined, NumberOutlined, PhoneOutlined } from "@ant-design/icons";
import { educations, projects } from "./data/data.js";
import { experience } from "./data/data.js";
import AsideComp from "./components/AsideComp";
import FooterComp from "./components/FooterComp";



function App() {
  return <>
    <div className="main">
      <HeaderComp />
      <div className="body-container">
        <div className="left">
          <section className="about">
            <article>
              <h2>
                À Propos De Moi
              </h2>
              <p>
Je suis un développeur web créatif et ponctuel, passionné par la création d'expériences en ligne attrayantes. À 20 ans, j'ai découvert ma passion pour la programmation en 2023 et depuis lors, je suis déterminé à poursuivre une carrière dans le domaine. Malgré mon niveau d'expérience actuel, je suis convaincu de ma capacité à m'améliorer et à apporter une contribution significative dans un environnement collaboratif et éducatif.</p>
            </article>
          </section>
          <section className="projects">
            <h2>Mes Projets</h2>
            <article>
              <img className="featured-img" src="src/assets/images/img-projects.webp" alt="Projets" />
              <div className="project-info">
                <h3>site web vitrine pour boulangerie</h3>
                <p>Site vitrine dynamique et responsive incluant un CRUD pour gérer les produits et la création de compte administrateur.
</p>
                <div className="btn-link">
                  <Button icon={<LikeOutlined />} className="btn" a href="https://coin-chaud.000webhostapp.com/">Regarder De Plus Près</Button>
                </div>
              </div>
            </article>
            <Divider style={{ backgroundColor: "#fff" }} />

            {projects.map((item) => {
              return (<article className="article-item" key={item.id}> <div className="left">
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Button type="link" icon={<LinkOutlined />} a href={item.link}>En savoir plus </Button>
              </div>
                <div className="right"></div>
              </article>);

            })}
          </section>

          <section className="xp">
            <h2>Experiences professionnelles</h2>
            {experience.map((item) => {
              return (<article key={item.id}><h3>{item.title}</h3><p>{item.description}</p></article>)
            })}

          </section>


        </div>
        <AsideComp/>
      </div>
      <FooterComp />

    </div>





  </>;
}

export default App;
