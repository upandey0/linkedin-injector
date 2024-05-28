(function() {
    'use strict';
  
    // Source Image
    const newImageUrl = 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg';
    
  
    // Selection of Image holders and replacement
    function replaceProfilePictures() {
      const profilePictures = document.querySelectorAll('.evi-image');
  
      profilePictures.forEach(picture => {
        picture.src = newImageUrl;
      });
    }
  
    // Loader : 
    
    function waitForPageLoad() {
      const observer = new MutationObserver(replaceProfilePictures);
      const targetNode = document.querySelector('body');
  
      observer.observe(targetNode, {
        childList: true,
        subtree: true
      });
    }
  
    waitForPageLoad();
  })();