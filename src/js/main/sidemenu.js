// ------------------------------------------------------------------------
// theframeshop: main/sidemenu.js
// ------------------------------------------------------------------------

var SideMenu = ((SM) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  SM.hide = function() {
    if (SM.isVisible()) {
      SM.toggle()
    }
  }

  SM.isVisible = function() {
    return $cache("#sidemenu").hasClass("visible")
  }

  SM.toggle = function() {
    $cache("#sidemenu").transition({
      animation: "slide down"
    })
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------
  
  SM.init = function() {
    $cache("#btnSideMenu").on("click", function() {
      SM.toggle()
    })

    BP.min_lg.addListener(function(e) {
      if (e.matches) {
        SM.hide()
      }
    })
  }


  return SM
})(SideMenu || (SideMenu = {}))
