<h3>Autoprefixer</h3>

CSS kodlarının diğer tarayıcılar ile sorunsuz çalışabilmesi için gerekli ön ekleri tamamlar.

```css
//Kaydetmeden Önce
div {
    display: flex;
}

//Kaydettikten Sonra
div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
```

<h3>Browsersync</h3>

CSS veya JavaScript dosyalarında değişiklik yaptığınız anda bunları tarayıcıya yansıtır. Böylece sürekli `F5` yada `CTRL+F5` yapmanıza gerek kalmaz.

<h3>Css Declaration Sorter</h3>

CSS kodlarında kaydetme işlemi gerçekleştirdiğiniz anda, tüm kodları alfabetik olarak sıralar.

```css
//Kaydetmeden Önce
body {
    display: block;
    animation: none;
    color: #C55;
    border: 0;
}

//Kaydettikten Sonra
body {
    animation: none;
    border: 0;
    color: #C55;
    display: block;
}
```

<h3>Gulp Clean CSS</h3>

CSS kodlarında kaydetme işlemi gerçekleştirdiğiniz anda kodları minify eder (<i>sıkıştırır</i>). Böylece dosya boyutunu küçülterek, performansa olumu etki katar.

```css
//Kaydetmeden Önce
a {
    color: #000;
    display: inline-block;
    text-decoration: none;
}

//Kaydettikten Sonra
a{color:#000;display:inline-block;text-decoration:none}
```

<h3>Gulp Concat</h3>

CSS ve JavaScript dosyalarında kaydetme işlemi gerçekleştirdiğiniz anda, CSS ve JavaScript dosyalarının her birini birer dosyada birleştirir. Çalıştığınız tüm CSS dosyalarını tek bir `index.css` dosyasında, tüm JavaScript dosyalarını ise tek bir `index.js` dosyasında birleştirir.

<h3>Gulp SASS</h3>

SASS ile CSS'i bir programlama diline benzer yapıyla geliştirebiliriz; değişkenler, döngüler, if-else, fonksiyonlar yada iç içe geçmiş şekilde CSS yazabiliriz.

```sass
//Kaydetmeden Önce
$backgroundColor: #f5f5f5;
$width: 250px;
.square {
    width: $width;
    height: 250px;

    .color {
        background-color: $backgroundColor;
    }
}

//Kaydettikten Sonra
.square {
    width: 250px;
    height: 250px;
}

.square .color {
    background-color: #f5f5f5;
}
```


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
