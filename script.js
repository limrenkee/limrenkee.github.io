var words = ['Hi, I am Ren Kee','A.K.A waterbottleboy1','Full time student','Part time trash gamer'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {

  console.log('starting')
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.intro-text').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// making image fade out on scroll

$(window).scroll(function() {
  $(".fade-in-image").css("opacity", 1 - $(window).scrollTop() / 3000);
});