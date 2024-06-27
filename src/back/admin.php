<?php
session_start();

// Vérifier l'authentification de l'administrateur
/*if (!isset($_SESSION['admin_authentifie']) || $_SESSION['admin_authentifie'] !== true) {
    header('Location: connexion.php');
    exit();
}
*/
include "inc/init.php";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de Bord</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script>
    </script>
</head>
<body>
    <div class="dashboard">
        <h2>Tableau de Bord Administrateur</h2>

        <a href="index.php">Accueil</a>
        <a href="deconnexion.php">Se déconnecter</a>
        </div>
</body>
</html>