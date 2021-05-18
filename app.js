/**
 * Objectif 1 - Créer un titre dans notre body
 */

// const title = React.createElement('h1', {}, 'Hello world !')
// const variable = React.createElement('tag', class/id/objet nul le cas échéant, 'enfant')

// Brancher le composant à notre vue
// ReactDOM.render(title, document.querySelector('#app'))
// ReactDOM.render(Composant que l'on veut brancher, élément du DOM sur lequel on veut brancher notre composant)


/**
 * Objectif 2 - Ajouter un Timer dans un élément span
 */

let n = 0
// Chiffre qui va augmenter toutes les secondes

const render = () => {
    // On crée la fonction render() qui va permettre de créer et afficher les éléments
    const title = React.createElement('h1', {}, 'Hello world ! ',
        React.createElement('span', {}, n)
        // On crée une span directement avec la création du titre
    )

    ReactDOM.render(title, document.querySelector('#app'))
    // On l'affiche
}

render()
// On appelle une première fois la fonction render()

window.setInterval(() => {
    render()
    n++
}, 1000)
// On crée un interval qui va appeller render() toutes les secondes et augmter n de 1 en même temps

