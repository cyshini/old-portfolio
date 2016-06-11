# Portfolio

The project sources have to be committed to the "dev" branch of your repository, while the "middleman deploy" command will automatically build and deploy the website on the "master" branch.

- - -

## Tools

- [Middleman + extensions](https://middlemanapp.com/) *[Static site generator]*
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

    bundle install

Launch the server on your machine

    middleman server

Commit and push sources to your repository

    git commit -am "commit-message"
    git push origin dev

Build and deploy website to Github Pages

    middleman deploy
