console.log("Hello World!");
javascript:(function() {
  const hi = (data) => {
    const popup = window.open('', '_blank', 'width=600,height=300,scrollbars=no,resizable=yes');
    
    popup.document.head.innerHTML = '<style>body{background-color:black;font-family:Arial;color:#fff;margin:0;}ul{list-style-type:none;padding:0;}li{padding:10px;cursor:pointer;transition:background-color 0.3s;}li:hover{background-color:#555;}</style>';

    const bruh = popup.document.createElement('ul');
    data.forEach(script => {
      const item = popup.document.createElement('li');
      item.textContent = script.name;

      item.addEventListener('click', () => {
        const ok = popup.document.createElement('script');
        ok.src = script.url;
        popup.opener.document.body.appendChild(ok);
      });

      bruh.appendChild(item);
    });

    const content = popup.document.createElement('div');
    content.innerHTML = '<img src="data:image/octet-stream;base64,UklGRm4FAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSP0CAAABoATJtmnbmhvX99m2bdu2bdvv27b/b9m2bdvGtY1z9uytvfZac3x2ImIC6N/bpPrN+wwZ1LJxmodmwClXPvheNavXfv/QDRcuwpDyEEeZsZg80Zwjz1Zw1EHmW2eK1Xx1wKbuaOMIdHFGwAbHK68VJnFEKRufPc4T5Fg1Wxm7VIpJBWzto+MlcD9mq3PtOz2TLf/ueseua1jA85IsapPPIla1t2ZSwFJOtcP7lgX90IaOV7CoNyYa52ewsNUphg3/kcV9bZpRCT+wwEUNDOqTxyJ/39uYpIdZ6I+TDfF+ZrGzmpuxiAV/wDVhB4teZUKxbHxedG+y9HOiOoflbx6NVwLg+Wi+YoRPRDGFIVbUi+APDJynbx+j3KIroRrGZ7oGMM7NmjKBsJ7DjHS7lgwot+poHkAJXA1jGes8DXEwJeEmM9qEUM+iiQ8M9TsaHhwmIQ7n5jCdGG5NmJfxcGqIANC1al0ZcKbaAUS/OkpXIqpNULoKUkul+xFxfaXXIbVQqoDUXYkhj4a3WcXBtE/Fx3SeShKm4yqJ8HxMu1VcTBtUCNNSeMPh9VAqgJSi9Baktkq3I6pIVroCUW6C0nFEGaQ8HtHXaoRofojP8MQpZGc8v4ehGJyRYZxP0ASjwtBbaOIUuiuaR8PRr2A8DT2wPEcaGxZD2a2DfkcS1NPSEsktpPcSHMWkeRyOe3RRDEaatq5xEGeQ/nMwFKRG0BfDvRTlTggU7dvyBc0jmhuI9wdFPVq6DxIj8zOEm0nRJ8vWikxsLdn1ZOZxuX4mU8+T6lcyt0qmmGeQe69EeQ6ZXPcPefLJcP8taWKOaeS9IstPLln4lSS3k51XihHbT7ZeJ0RlXbK3b0yAYFtDsvoX66r7k+XegDy7Rrsk4CtV9nzYn2RMn2/JZYkkp3PlC8YVP9SfhHW/MGsWSdxy4y1ZZsSvWUVy9/ijNrKqDSR80ogJ31Tqqv5y2tQ0Ajn70q8yMgr/rMqqzCnI/73sl8znr5voEF7fTfaSfJf+7w0AVlA4IEoCAABQFACdASqAAIAAP8XU32Y/v66nNPQ9E/A4iWoGfd0epowgLxuDakOaRQ2vZf48CDL7GpouVxRQT7qBJUrAEUOFwpelEZs3c+cZoU9x/wB4tQfoos9j9j96S5VBl6jTVdgz2YvURpkSTyxy2f4x90NN19+VAttK9xW21zOo/LIDLX3WMtf5dTgVgBzlgGinetXGlWIFnAHyXud/TqIYei/6RadlLXptwbCS64AA/u3HJ7PhtydIMpkkYfQfey2mCXQ9KaJDs7V999rpuPrmYwAY9OnWxj94JyLzgyA5ZHREIXyLZ91Cx40H9qJWtmWOvjNSgvDhig26cZWvtSBueXCxycJ67MU9MbYpkDEjQmM1hDRKTGGczRlWTLKGWKH8uLFvu1a5kYlCwn9Qjj3kGQl+fXPN4dbj43wM9wnmrZ/1XKV02Y7yIPF4KjBJzwN9FXDGE29W0KeUhJyFrlTEa2tAGB2v6IskFZArdf3eyuGgaKX17Oaz3ZCjmUw6MzLThUV7kECpdz/g0k02jhG6lZOrCgkG7xqJHMMDXjJMYLr5JypSGNBXdSFlPjPvrv0v//3ZFqoWyOXjohZ3NVt5aal42ltnLWmwLo5V6kCk9Czgk2o2K2sdKRIiMcnp+4rsybufm2BoQ4HSwfzOR4jTXNmCQJrprjuW++ZJACAs9Dv7EausPFgjihD+UxOujVdF2MfEwmf5htwyji8H3v4mowIcdkeugaqIOeif/dvC03lAq3qGOHYnR8wMAbCtDdlf2eiTHrHkZWEi4AAA" /><h2>ExploitHardest</h2><p>Created by SevenworksDev on GitHub.com</p><button id="startButton">Launch</button>';
    content.style.cssText = 'text-align: center; padding: 20px; color: #fff; font-family: Arial;';

    content.querySelector('#startButton').addEventListener('click', () => {
      popup.document.body.removeChild(content);
      popup.document.body.appendChild(bruh);
    });

    popup.document.body.appendChild(content);
  };

  const list = () => {
    fetch('https://raw.githubusercontent.com/SevenworksDev/ExploitHardest/main/scripts.json')
      .then(response => response.json())
      .then(data => hi(data))
      .catch(error => console.error('Error fetching JSON:', error));
  };

  list();
})();
