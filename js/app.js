'use strict';

document.addEventListener('DOMContentLoaded', function() {
      console.log('działa');
      // Zadanie 1
      var forDropdown = document.querySelector('.for-dropdown');
      console.log(forDropdown);
      var dropdown = document.querySelector('.dropdown');
      console.log(dropdown);

      forDropdown.addEventListener('mouseover', function() {
      	dropdown.style.display = 'block';
      });

      dropdown.addEventListener('mouseout', function() {
      	dropdown.style.display = 'none';
      });

      // zadanie 2
      var buttons = document.querySelectorAll('.read-more');
      console.log(buttons);

      console.log(buttons[0].previousElementSibling);

      buttons[0].addEventListener('click', function() {
      console.log('działa');
      });

      buttons[0].addEventListener('click', function() {
      console.log(this);
  	  });

  	  buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      console.log(textArea);
      });

      buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      textArea.style.display = 'block';
      });

      buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      });

      buttons[0].addEventListener('click', function() {
      	var textArea = this.previousElementSibling;
      	
      	if (textArea.style.display === 'none' || textArea.style.display === '') {
      	textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      	} 
      	else {
      	textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }
      });

 });