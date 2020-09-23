document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'page1') {
      page.querySelector('#1').onclick = function() {
        document.querySelector('#myNavigator').pushPage('detail1.html');
      };
      page.querySelector('#2').onclick = function() {
        document.querySelector('#myNavigator').pushPage('detail2.html');
      };
      page.querySelector('#3').onclick = function() {
        document.querySelector('#myNavigator').pushPage('detail3.html');
      };
      
    } else if (page.id === 'page2') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });