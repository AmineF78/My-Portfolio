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
              <p>Je suis un développeur web junior de 20 ans, créatif, ponctuel et passionné par la création d'expériences en ligne captivantes. J'ai découvert ma passion pour le développement web à l'âge de 19 ans et depuis, je suis déterminé à me lancer dans une carrière dans ce domaine. Bien que je sois en début de parcours professionnel, je suis convaincu de ma capacité à évoluer rapidement et à apporter une contribution précieuse dans un cadre collaboratif et stimulant.</p>
<p>Je suis actuellement à la recherche de ma première expérience professionnelle en tant que développeur web, au sein d'une entreprise qui souhaite accueillir un jeune talent prêt à s'investir pleinement et à démontrer son potentiel pour obtenir des résultats concrets et rapides !</p>            </article>
          </section>
          <section className="projects">
  <h2>Mes Projets</h2>
  <article>
    <img className="featured-img" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_640/https://www.bocasay.com/wp-content/uploads/2021/06/projets-informatiques.jpg" alt="Projets" />
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
  {/*<div className="new-project">
  <button name="ajouter_projet" href="">Ajouter un nouveau projet</button>

  </div>*/}
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
{/*<?php 
if (isset($_POST['ajouter_projet'])){
  $nom_projet = $_POST['nom_projet'];
  $description_projet = $_POST['description_projet'];
  $etat_projet = $_POST['etat_projet'];

  $sql = "INSERT INTO projets (nom_projet, description_projet, etat_projet) VALUES (?, ?, ?)";
  $stmt = $mysqli->prepare($sql);
  $stmt->bind_param("ssd", $nom_projet, $description_projet, $etat_projet);

  if ($stmt->execute()){
    $message = "Projet ajouté avec succès.";}
    else{
      $erreur = "Erreur lors de l'ajout du projet : " . $stmt->error;
    }
    $stmt->close();

  }
?>*/}

export default App;
