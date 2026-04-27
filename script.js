
document.addEventListener("DOMContentLoaded", () => {
    
    // On récupère l'élément qui contient le nom (classe .name)
    const nameElement = document.querySelector(".name");
    
    if (nameElement) {
        // On extrait le texte du nom
        const name = nameElement.textContent;
        
        // On affiche le message dans la console
        console.log(`Carte de visite de ${name} prête !`);
    } else {
        // Petit message de sécurité si la classe .name n'existe pas
        console.log("BIENVENUE SUR NOTRE CARTE NUMERIQUE");
    }
});
