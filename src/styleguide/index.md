## 1. Couleurs

<p class="lead">Toutes les couleurs utilisées par l'interface du site.</p>

<div class="grid-x grid-margin-x up-1 medium-up-3 large-up-5">
  <div class="cell">
    <div class="color-block">
      <span style="background: #5863f8"></span>
      primary : #5863f8
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #3a3a4f"></span>
      secondary : #3a3a4f
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #3adb76"></span>
      success : #3adb76
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #ffae00"></span>
      warning : #ffae00
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #cc4b37"></span>
      alert : #cc4b37
    </div>
  </div>
</div>

<div class="grid-x grid-margin-x up-1 medium-up-3 large-up-5">
  <div class="cell">
    <div class="color-block">
      <span style="background: #e6e6e6"></span>
      light-gray : #e6e6e6
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #9d9da9"></span>
      medium-gray : #9d9da9
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #555566"></span>
      dark-gray : #555566
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #22222d"></span>
      black : #22222d
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #fefefe"></span>
      white : #fefefe
    </div>
  </div>
</div>



## 2. Typographie

<p class="lead">Cette charte utilise la typographie <a href="https://rsms.me/inter/" rel="nofollow">Inter UI</a> pour les titres et paragraphes.</p>

<h1>Heading Level 1</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum. <a href="#">This is a link</a>.</p>

<h2>Heading Level 2</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum. <a href="#">This is a link</a>.</p>

<h3>Heading Level 3</h3>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum. <a href="#">This is a link</a>.</p>

<h4>Heading Level 4</h4>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum. <a href="#">This is a link</a>.</p>

<h5>Heading Level 5</h5>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum. <a href="#">This is a link</a>.</p>

<h6>Heading Level 6</h6>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum. <a href="#">This is a link</a>.</p>



## 3. Boutons

<p class="lead">Les boutons se décomposent en deux familles : les "primary" et les "secondary"</p>

### 3.1 Primary

Ce sont les boutons principaux de chaque page. Leur taille peut être ajustée avec les classes `.tiny`, `.small`, and `.large`.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

### 3.2 Secondary

Ces boutons sont dédiés aux actions secondaires sur les pages.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```



## 4. Callout

<p class="lead">Les callouts sont des encarts de contenus simples, traditionnellement délimités par une bordure et/ou un fond.</p>

```html_example
<div class="callout">
  <h2>Callout title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nisi eros. Phasellus mattis nisi a tempor rutrum. Vivamus elementum eget nisl in scelerisque. Vestibulum interdum justo ante, eleifend volutpat turpis dignissim quis. Aliquam mollis ante lacinia nisl auctor, ut iaculis urna commodo. Morbi ornare viverra bibendum. Donec varius arcu a bibendum pellentesque. Aliquam congue massa eu elementum gravida.</p>
</div>
```



## 5. Cards

<p class="lead">Les cards allient image et texte. Présentes en grilles, elles servent généralement de point d'accès visuel vers d'autres pages.</p>

```html_example
<div class="grid-container">

  <div class="grid-x grid-margin-x grid-margin-y">

    <a href="#" class="medium-6 cell">
      <div class="card">
        <div class="card-images">
          <img src="http://via.placeholder.com/200x200?text=Logo" class="project-logo" alt="">
          <img src="http://via.placeholder.com/800x600?text=Image" class="project-thumbnail" alt="Project title">
        </div>
        <div class="card-section">
          <h2>Card title<span class="card-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 -2 22 18" class="icon-arrow-right"><polygon points="20.3 7 14.2 0.9 12.4 2.7 15.5 5.8 1.7 5.8 1.7 8.3 15.5 8.3 12.4 11.3 14.2 13.1 20.3 7 20.3 7 " fill="#FFF"/></svg></span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </a>

    <a href="#" class="medium-6 cell">
      <div class="card">
        <div class="card-images">
          <img src="http://via.placeholder.com/200x200?text=Logo" class="project-logo" alt="">
          <img src="http://via.placeholder.com/800x600?text=Image" class="project-thumbnail" alt="Project title">
        </div>
        <div class="card-section">
          <h2>Card title<span class="card-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 -2 22 18" class="icon-arrow-right"><polygon points="20.3 7 14.2 0.9 12.4 2.7 15.5 5.8 1.7 5.8 1.7 8.3 15.5 8.3 12.4 11.3 14.2 13.1 20.3 7 20.3 7 " fill="#FFF"/></svg></span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </a>

  </div>

</div>
```
