// ------------------------------------------------------------------------
// theframeshop: main/hero.js
// ------------------------------------------------------------------------

var Hero = ((Hero) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    HERO_IMAGE_ACTIVE : "hero__image--active"
  }

  const Selector = {
    HERO                  : "#hero",
    HERO_HEADER           : ".hero__header",
    HERO_IMAGE            : ".hero__image",
    HERO_IMAGE_NOT_ACTIVE : `.hero__image:not(.${ClassName.HERO_IMAGE_ACTIVE})`
  }

  const Images = {
    CurrentIndex: 5,
    Paths: [
      "img/hero/0.jpg",
      "img/hero/1.jpg",
      "img/hero/2.jpg",
      "img/hero/3.jpg",
      "img/hero/4.jpg",
      "img/hero/5.jpg"
    ]
  }

  const Slideshow = {
    FadeDuration : 3000,
    Interval     : 8000
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Hero.getHeaderTop = function() {
    return $cache(Selector.HERO).find(Selector.HERO_HEADER).offset().top
  }

  Hero.getNextImagePath = function() {
    Images.CurrentIndex += 1
    if (Images.CurrentIndex >= Images.Paths.length) {
      Images.CurrentIndex = 0
    }

    return Images.Paths[Images.CurrentIndex]
  }

  Hero.setImagePath = function($img, path) {
    $img.css("background-image", `url('${path}')`)
  }

  Hero.startSlideshow = function() {
    setInterval(function() {
      $cache(Selector.HERO).find(Selector.HERO_IMAGE)
        .toggleClass(ClassName.HERO_IMAGE_ACTIVE)

      setTimeout(function() {
        let $img = $cache(Selector.HERO).find(Selector.HERO_IMAGE_NOT_ACTIVE)
        Hero.setImagePath($img, Hero.getNextImagePath())
      }, Slideshow.FadeDuration)

    }, Slideshow.Interval)
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Hero.init = function() {
    $cache(Selector.HERO).find(Selector.HERO_IMAGE).each(function() {
      Hero.setImagePath($(this), Hero.getNextImagePath())
    })

    $cache(Selector.HERO).find(Selector.HERO_IMAGE).first()
      .addClass(ClassName.HERO_IMAGE_ACTIVE)

    Hero.startSlideshow()
  }


  return Hero
})(Hero || (Hero = {}))
