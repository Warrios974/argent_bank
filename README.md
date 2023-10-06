# Création d'une application web de gestion de compte Argent Bank

## Description
**Argent Bank**, nouvelle banque sur le marché décide de mettre en place leur propre application, pour que les clients puissent se connecter et gérer leurs comptes et leur profil.

Pour ce projet j'ai utilisé React. Plus précisément on retrouve :
- **Next.JS** : Gestion des routes faciles à mettre en place, et la puissance des *Use Client*.
- **Typescript** : Typer nos données afin de mieux les utiliser dans l'application.
- **Tailwind** : Réaliser le style de l'application, gràce aux class CSS prédefini.
- **Redux** : Gérer les state global de l'application.

## Comment utiliser le projet
### Prérequits
- [Node.JS](https://nodejs.org/fr)
- [npm](https://github.com/npm/documentation)

### lancer le projet
Pour utiliser ce projet, vous aurez besoin de cette [API]([https://nodejs.org/fr](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)). Quand l'API est installée et lancée : 

- Forkez le projet.
- Lancez la commande `npm install` dans votre terminal, pour installer toutes les dépendances.
- Puis `npm run dev` pour lancer le projet.

### Redux

Pour pouvoir gérer les states de l'application j'ai utilisé Redux, plus précisement Redux Toolkit. Retrouvez ci dessous la localisation de redux et ses fichiers.

```bash

src    
└───app
    └───GlobalRedux
        |    store.tsx
        |    provider.tsx       //Composent provider
        |    middleware.ts      //Custome Middleware
        | 
        └───Features
            └───user
            |   userSlice.ts    //States User
```

Pour utiliser redux avec Next.js il a falut créer un composant provider pour pouvoir englober mon application.

```
src    
└───app
    | layout.tsx

    <html lang="en">
      <body className='h-screen flex flex-col text-text-primary'>
        <Providers>
          <Header />
          <main className='flex-1'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
```
