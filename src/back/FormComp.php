<?php
require_once("inc/init.php");

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = htmlspecialchars($_POST['title']);
    $description = htmlspecialchars($_POST['description']);
    $img = htmlspecialchars($_POST['img']);
    $time = htmlspecialchars($_POST['time']);
    $inProgress = htmlspecialchars($_POST['inProgress']);

    $stmt = $pdo->prepare("INSERT INTO project (title, description, img, time, inProgress) VALUES (?, ?, ?, ?, ?)");
    if ($stmt) {
        $stmt->bind_param("ssss", $title, $description, $img, $time, $inProgress);
        if ($stmt->execute()) {
            echo "Projet ajouté avec succès.";
        } else {
            echo "Une erreur est survenue lors de l'ajout du projet.";
        }
        $stmt->close();
    } else {
        echo "Une erreur est survenue lors de la préparation de la requête.";
    }
}
?>
<div class="text-center">
    <h2>Formulaire ajout d'annonces</h2>
</div>
<form action="" method="post" class="form">
    <label for="titre">Titre</label>
    <input class="form-control" type="text" name="title">

    <label for="description">Description</label>
    <textarea class="form-control" name="description"></textarea>
    
    <label for="img">Image</label>
    <input class="form-control" type="text" name="img">
    
    <label for="time">Durée du projet</label>
    <input class="form-control" type="text" name="time">

    <label for="inProgress">Avancée du projet</label>
    <input class="form-control" type="boolean" name="inProgress">
    
    <div class="text-center m-2">
        <input type="submit" value="Envoyer">
    </div>
</form>
