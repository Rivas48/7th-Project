	//Global Variables 

	const video = document.getElementById('video'); 
	const span = document.getElementsByTagName('span');
	const spanCaptions = document.querySelector('.myclass');
	//Event Listener that will update whenever the time changes.
	video.addEventListener('timeupdate', (e) => { 
	for (i =13; i < span.length; i++) {
	//Define local variables allowing me to select each span tag for the attribute values data-start and data-end.
		let captions = span[i];
		let captionStartTime = captions.getAttribute('data-start');
		let captionEndTime = captions.getAttribute('data-end');
		let videoCurrentTime = video.getCurrentTime();
	// If statement that declares conditions for the Event.
		if (video.getCurrentTime() >= captionStartTime && video.getCurrentTime() <= captionEndTime) {
	// If top is true the class .highlight is added to that span tag.	
				captions.className = "highlight";

				} else {
	// If the first statement is false then we add no class to the span tag.
					captions.className = '';
				}
		
			}
		});

	
	
	spanCaptions.addEventListener('click', (e) => {
   let target = e.target;
   let jumpToTime = target.getAttribute('data-start');
   if (target) {
     video.currentTime = jumpToTime;
   }
});
