
			
			
			  window.fbAsyncInit = function() {
			  
			 
				FB.init({appId: '181502138551095', status: true, cookie: true,
						 xfbml: true});
						
						 
						FB.getLoginStatus(function(response) {
  if (response.session) {
		
    
  } else {
  
 var w = window.open();
  w.opener = null;
   w.document.location = "http://www.facebook.com/connect/uiserver.php?app_id=181502138551095&method=permissions.request&display=page&next=http://apps.facebook.com/york_test/&response_type=code&canvas=1&perms=user_about_me,friends_photos,friends_about_me,status_update,publish_stream";
    }
});
						 
						 
			  };
				var e = document.createElement('script'); e.async = true;
			  (function() {
				e.src = document.location.protocol +
				  '//connect.facebook.net/en_US/all.js';
				document.getElementById('fb-root').appendChild(e);
			  }());
			  

			