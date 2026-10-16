// Hover thumbnails: a video inside .thumb plays while its row is hovered or
// focused, and rewinds when the pointer leaves. The source is only fetched on
// first play (preload="none"), so the page stays light.
//
// Touch screens have no hover, so there each video plays while most of its
// row is on screen instead.
(function () {
  var rows = Array.prototype.slice.call(document.querySelectorAll('.entry'))
    .filter(function (row) { return row.querySelector('.thumb video.hover'); });

  function play(row) {
    var p = row.querySelector('.thumb video.hover').play();
    if (p && p.catch) p.catch(function () {});
  }

  function stop(row) {
    var video = row.querySelector('.thumb video.hover');
    video.pause();
    video.currentTime = 0;
  }

  var touch = window.matchMedia && window.matchMedia('(hover: none)').matches;

  if (touch && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('playing');
          play(e.target);
        } else {
          e.target.classList.remove('playing');
          stop(e.target);
        }
      });
    }, { threshold: 0.6 });
    rows.forEach(function (row) { observer.observe(row); });
    return;
  }

  rows.forEach(function (row) {
    row.addEventListener('mouseenter', function () { play(row); });
    row.addEventListener('mouseleave', function () { stop(row); });
    row.addEventListener('focusin', function () { play(row); });
    row.addEventListener('focusout', function () { stop(row); });
  });
})();
