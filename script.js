
          //const cont = document.querySelector('.container');
          //const nameInput = document.querySelector('#name');
          //const plateInput = document.querySelector('#plate');
          //const amountInput = document.querySelector('#amout');
          //const dateInput = document.querySelector('#p-date');*/
          
          //Date.now();
          
          
          
          /*const rbtn = document.getElementById('rbtn');
               rbtn.addEventListener('click', () => {
                    //console.log('clicked');
                    if(nameInput != '') {
                         //nameInput = nameInput.value;
                         nameInput.remove();
                    }
               });*/

     // Login codes          
     const loginForm = document.querySelector('#login-form');
     const emailInput = document.querySelector('#email');
     const passwordInput = document.querySelector('#password');
     const msgView = document.querySelector('.view');

     //loginBtn.addEventListener('submit', onSubmit);

     function onSubmit(e) {
          e.preventDefault();
          //const emailInput = document.getElementById('email').value;
          //const passwordInput = document.getElementById('password').value;
          if(emaiInput === '' || passwordInput === '') {
               msgView.innerHTML = 'Enter all fields';
               setTimeout(() => msgView.remove(), 3000);
          }
          else {
               // login 
               
          } 
     }
     // Reset button 
     const reset = document.getElementById('reset');
     reset.addEventListener('click', () => {
          document.getElementById('plate').value().remove();
          document.getElementById('amount').value().remove();
     });

     