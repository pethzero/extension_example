if (window.location.hostname === "www.youtube.com") {
	const clear = (() => {
		const defined = v => v !== null && v !== undefined;
		const timeout = setInterval(() => {
			const ad = [...document.querySelectorAll('.ad-showing')][0];
			if (defined(ad)) {
				const video = document.querySelector('video');
				if (defined(video)) {
					video.currentTime = video.duration;
				}
			}
		}, 500);
		return function() {
			clearTimeout(timeout);
		}
	})();
	console.log("youtube")
}
// clear();