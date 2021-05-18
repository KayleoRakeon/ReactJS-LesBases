**JSX** 

Grâce au JSX, dans notre exemple, on a pu remplacer les `createElement`par du HTML directement dans notre fichier .js 

L'interpolation permet d'interpréter du JavaScript au milieu du JSX. Pour cela, un ouvre un pair de `{}`pour faire comprendre que tout ce qui se trouve à l'intérieur soit interprété comme du JavaScript.

Il existe quelques exceptions pour éviter les erreurs :
> `className`à la place de `class`, mot clé réservé par JavaScript
> Tous les attributs avec un `-`comme les `data-attributes`
> Par contre les attributs concernant l'a11y s'écrivent normalement `aria-*`

La balise `<React.Fragment>`sert à imbriquer plusieurs parents en une fois, ce qui est normalement impossible sans. 

------- 

**Les composants** 

Un composant est une fonction en JavaScript. Par exemple `const Welcome = () => <h1>Hello World</h1>`, `Welcome est un composant`. 

Pour l'utiliser, on va l'appeller comme un élément HTML

*Attention, la majuscule est obligatoire lorsqu'on utilise des composants* 

L'interet des composants est qu'on va pouvoir leur passer des proriétés. Chaque composant va avoir en paramètre un objet `props`qui contiendra toutes les propriétés. 

On peut tout destructurer grâce à l'ES6 pour en pas avoir à réécrire tout le temps `props.*``

--------

**Le State** 

Il existe deux états de composants : Les *stateless component (ou functionnal ou dumb component)* qui sont des composants d'affichages; et les *Stateful components (ou class component)* qui hérite de React Component et possède son propre état et cycle de vie. 

*Le Cycle de vie* c'est toutes les étapes par lesquelles va passer notre composant. 

Il y a 3 grandes catégories : 
> Mount --> Le composant est monté 
> Update --> Le composant est mis à jour 
> Unmount --> Le composant est démonté

