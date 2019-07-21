<h1>Frontend Boilerplate</h1>

Frontend Developerlar için proje başlangıç taslağıdır.

`NodeJS` kurulumu yaptıktan sonra `Node.js command prompt`u açarak `npm install` komutu ile `package.json` dosyası içerisindeki paketlerin kurulmasını sağlayabilirsiniz.

<h2>İçerdiği Paketler</h2>

* <a href="https://github.com/omergulcicek/frontend-boilerplate#autoprefixer">Autoprefixer</a>
* <a href="https://github.com/omergulcicek/frontend-boilerplate#browsersync">Browser Sync</a>
* <a href="https://github.com/omergulcicek/frontend-boilerplate#css-declaration-sorter">Css Declaration Sorter</a>
* <a href="">Gulp</a>
* <a href="https://github.com/omergulcicek/frontend-boilerplate#gulp-clean-css">Gulp Clean Css</a>
* <a href="https://github.com/omergulcicek/frontend-boilerplate#gulp-concat">Gulp Concat</a>
* <a href="">Gulp Post CSS</a>
* <a href="https://github.com/omergulcicek/frontend-boilerplate#gulp-sass">Gulp SASS</a>
* <a href="https://github.com/omergulcicek/frontend-boilerplate#gulp-uglify">Gulp Uglify</a>

<hr>

<h3>Autoprefixer</h3>

CSS kodlarının diğer tarayıcılar ile sorunsuz çalışabilmesi için gerekli ön ekleri tamamlar.

```css
/* Kaydetmeden Önce */
div {
  display: flex;
}

/* Kaydettikten Sonra */
div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

<hr>

<h3>Browsersync</h3>

CSS veya JavaScript dosyalarında değişiklik yaptığınız anda bunları tarayıcıya yansıtır. Böylece sürekli `F5` yada `CTRL+F5` yapmanıza gerek kalmaz.

<hr>

<h3>Css Declaration Sorter</h3>

CSS kodlarında kaydetme işlemi gerçekleştirdiğiniz anda, tüm kodları alfabetik olarak sıralar.

```css
/* Kaydetmeden Önce */
body {
  display: block;
  animation: none;
  color: #C55;
  border: 0;
}

/* Kaydettikten Sonra */
body {
  animation: none;
  border: 0;
  color: #C55;
  display: block;
}
```

<hr>

<h3>Gulp Clean CSS</h3>

CSS kodlarında kaydetme işlemi gerçekleştirdiğiniz anda kodları minify eder (<i>sıkıştırır</i>). Böylece dosya boyutunu küçülterek, performansa olumu etki katar.

```css
/* Kaydetmeden Önce */
a {
  color: #000;
  display: inline-block;
  text-decoration: none;
}

/* Kaydettikten Sonra */
a{color:#000;display:inline-block;text-decoration:none}
```

<hr>

<h3>Gulp Concat</h3>

CSS ve JavaScript dosyalarında kaydetme işlemi gerçekleştirdiğiniz anda, CSS ve JavaScript dosyalarının her birini birer dosyada birleştirir. Çalıştığınız tüm CSS dosyalarını tek bir `index.css` dosyasında, tüm JavaScript dosyalarını ise tek bir `index.js` dosyasında birleştirir.

<hr>

<h3>Gulp SASS</h3>

SASS ile CSS'i bir programlama diline benzer yapıyla geliştirebiliriz; değişkenler, döngüler, if-else, fonksiyonlar yada iç içe geçmiş şekilde CSS yazabiliriz.

```scss
/* Kaydetmeden Önce */
$backgroundColor: #f5f5f5;
$width: 250px;
.square {
  height: 250px;
  width: $width;

  .color {
    background-color: $backgroundColor;
  }
}

/* Kaydettikten Sonra */
.square {
  height: 250px;
  width: 250px;
}

.square .color {
  background-color: #f5f5f5;
}
```

<hr>

<h3>Gulp Uglify</h3>

JavaScript kodunuzda kaydetme işlemi yaptığınız anda tüm kodu minify eder (<i>sıkıştırır</i>).

```js
//Kaydetmeden Önce
Array.prototype.forEach.call(tabs, function(el, i) {
  el.classList.remove("aktif");
});

//Kaydettikten Sonra
Array.prototype.forEach.call(tabs,function(el,i){el.classList.remove("aktif")});
```
