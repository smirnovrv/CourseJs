//'use strict';

const box  = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
    //   hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      hearts = wrapper.querySelectorAll('.heart');

    //   box.style.backgroundColor = 'blue';
    //   box.style.width = '500px';

       box.style.cssText = 'background-color: blue; width: 500px';

    //    for (let i=0; i<hearts.length; i++) {
    //        hearts[i].style.backgroundColor = 'blue';
    //    }
    
    hearts.forEach(item => {
        item.style.backgroundColor = 'blue';
    });

    circles[0].style.backgroundColor = 'red';

    const div = document.createElement('div');
    div.classList.add('black');
    div.style.width = '500px';
    div.style.height = '200px';
    // document.body.append(div);
    wrapper.append(div);
    // wrapper.appendChild(div);

    // wrapper.prepend(div);

    // hearts[0].before(div); 
    // hearts[0].after(div);
    // wrapper.insertBefore(div, hearts[1]);

    // circles[0].remove();
    // wrapper.removeChild(hearts[0]);

    hearts[0].replaceWith(circles[0]);
    // wrapper.replaceChild(circles[0], hearts[0]);

    // div.textContent = 'Ryeuw';
    
    div.innerHTML = '<h1>"Hello world"</h1>';
    div.insertAdjacentHTML('beforebegin','<h1>beforebegin</h1>');
    div.insertAdjacentHTML('beforeend','<h1>beforeend</h1>');
    div.insertAdjacentHTML('afterbegin','<h1>afterbegin</h1>');
    div.insertAdjacentHTML('afterend','<h1>afterend</h1>');