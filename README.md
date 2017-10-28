# Portfolio

The project sources have to be committed to the "dev-foundation" branch of your repository.

- - -

## Tools

- [Foundation 6](https://foundation.zurb.com/) *[framework]*
- [NodeJS](https://nodejs.org/en/) *[development]*
- [GitHub Pages](http://pages.github.com) *[deployment/hosting]*

## View it live
[http://cyshini.github.io/](http://cyshini.github.io/)

## Getting Started

Set up your project in your code directory

    git clone git@github.com:cyshini/cyshini.github.io.git your-project-folder
    cd your-project-folder
    git remote rm origin
    git remote add origin your-git-url

Install dependencies

    cd your-project-folder
    npm install

Launch the server on your machine

    npm start

Commit and push sources to your repository

    git commit -am "commit-message"
    git push origin dev-foundation

Create compressed, production-ready assets

    npm run build

Deploy the production folder

    gulp deploy
