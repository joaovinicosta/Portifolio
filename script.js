document.addEventListener("DOMContentLoaded", function() {
  var companyBlocks = document.querySelectorAll('.company-block');

  companyBlocks.forEach(function(block) {
      block.addEventListener('mouseover', function() {
          var info = block.querySelector('.company-info p');
          info.classList.add('slide-in');
      });

      block.addEventListener('mouseout', function() {
          var info = block.querySelector('.company-info p');
          info.classList.remove('slide-in');
      });
  });
});