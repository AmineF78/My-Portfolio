

<?php
$host = "localhost"; // Adresse du serveur MySQL
$utilisateur = "root"; // Nom d'utilisateur MySQL
$mot_de_passe = "root"; // Mot de passe MySQL
$base_de_donnees = "Bdd-portfolio"; // Nom de la base de données

$mysqli = new mysqli($host, $utilisateur, $mot_de_passe, $base_de_donnees);

if ($mysqli->connect_error) {
    die("Erreur de connexion à la base de données : " . $mysqli->connect_error);
}
