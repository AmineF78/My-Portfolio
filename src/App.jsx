import "./App.css";
import HeaderComp from "./components/HeaderComp";
import { Button, Divider } from "antd";
import { EnvironmentFilled, EnvironmentOutlined, LikeOutlined, LinkOutlined, MailOutlined, NumberOutlined, PhoneOutlined } from "@ant-design/icons";
import { educations, projects } from "./data/data.jsx";
import { experience } from "./data/data.jsx";
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
Je suis un développeur web de 20 ans, créatif et ponctuel, passionné par la création d'expériences en ligne attrayantes. À 19 ans, j'ai découvert ma passion pour le développement web et depuis lors, je suis déterminé à poursuivre une carrière dans le domaine. Malgré mon niveau d'expérience actuel, je suis convaincu de ma capacité à m'améliorer et à apporter une contribution significative dans un environnement collaboratif et éducatif.</p>
<p>Je suis actuellement à la recherche d'une entreprise qui souhaiterait développer son équipe de développeurs en misant sur un développeur en herbe qui saura montrer des résultats très rapidement!</p>
            </article>
          </section>
          <section className="projects">
  <h2>Mes Projets</h2>
  <article>
    <img className="featured-img" src="src/assets/images/img-projects.webp" alt="Projets" />
    <div className="project-info">
      <h3>site web vitrine pour boulangerie </h3>
      <p>Site vitrine dynamique et responsive incluant un CRUD pour gérer les produits et la création de compte administrateur.</p>
      <div className="btn-link">
        <Button icon={<LikeOutlined />} className="btn" a href="https://coin-chaud.000webhostapp.com/">Regarder De Plus Près</Button>
      </div>
    </div>
  </article>
  <Divider style={{ backgroundColor: "#fff" }} />

  {projects.map((item) => {
    return (
      <article className="article-item" key={item.id}>
        <div className="left">
          <img src={item.image} alt={item.title} />
          <h2>{item.title} {item.InProgress && <span className="in-progress"> (En cours de développement)</span>}</h2>
          <p>{item.description}</p>
          <Button type="link" icon={<LinkOutlined />} a href={item.link}>En savoir plus</Button>
        </div>
        <div className="right"></div>
      </article>
    );
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
