# Template React

## Introduction

Le but de ce template est d'avoir installé 3 paquets npm :

- axios
- react-router-dom
- gh-pages (pour publier notre projet React sur GitHub Pages).

Ce template est mobilefirst et responsive.

## Pourquoi ?

Faciliter le démarrage d'un projet React.

## Installation

1. Créé un nouveau repositoire sur GitHub.

2. Dans ton PC, place-toi sur le dossier où tu souhaites travailler et ouvre ta console.

3. Tape les commandes suivantes :

    ```
    git clone git@github.com:Oscar-AGUDELO/Template_React.git
    cd Template_React
    rm -rf .git
    ```

4. Change le nom du dossier par le nom de ton choix et reouvre ta console depuis le nouveau dossier :

5. Pour connecter ce template à ton nouveau repositoire GitHub tape les commandes suivantes :
    *Remplace "yourUserName" par ton User de GitHub et "yourRepositoryName" par le nom de ton nouveau repositoire.
    ```
    git init
    git add .
    git commit -m "first commit"
    git remote add origin git@github.com:yourUserName/yourRepositoryName.git
    git branch -M main
    git push -u origin main
    ```

6. Créé une nouvelle branch dev :
    ```
    git branch dev
    git checkout dev
    git add .
    git commit -m "dev : first commit"
    git push --set-upstream origin dev
    ```

7. Pour démarrer ton serveur en local tape les commandes suivantes :

```
    npm install
    npm start
```

## ⚠ Une fois tu auras finis ton projet. Pour publier ton projet sur GitHub Pages :

Il faut ajouter cette ligne dans le package.json (dans la ligne 2):

```
"homepage":"https://yourUserName.github.io/yourRepositoryName",
```

Remplace "yourUserName" par ton User de GitHub et "yourRepositoryName" par le nom de ton repositoire. Maintenant tape la commande suivantes :

```
    npm run deploy
```

Une nouvelle branch va se créer "gh-pages", c'est cette branch qui va être publié sur GitHub Pages. Tu peux faire "npm run deploy" depuis la branch que tu souhaites publier pour mettre à jour cette branch et publier tes changements.

## Ce qui est fait

L'architecture de notre projet est la suivante:
- Template_React
    - src
        - assets
        - components_Children
        - components_Fathers
        - pages
    - App.js
    - index.js
    - .gitignore
    - package.json
    - README.md

Alors ici, dans `src/components_Children/RandomApi.jsx`, nous avons un appel à l'API, ça a pour but de tester notre
packages `axios`.
Bien sûr, vous pouvez supprimer ce morceau de code.

Dans `src/index.js` j'ai importé `react-router-dom` et `App.js`. (`App.js` est le fichier principal de notre projet dans
lequel j'ai mis les `Routes`)

Vous pouvez bien évidemment supprimer ce morceau de code.


## Sources

    - https://github.com/GorskiAnthony
    - https://github.com/facebook/create-react-app

## Follow Me ! 

    - https://github.com/Oscar-AGUDELO
    - https://www.linkedin.com/in/oscar-agudelo-pro/
    - https://twitter.com/_OscarAGUDELO_
