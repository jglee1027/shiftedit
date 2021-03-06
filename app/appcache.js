define(['jquery'], function () {

	if (window.applicationCache) {
		window.applicationCache.addEventListener('updateready', function () {
			window.applicationCache.swapCache();

			$('<div class="notification ui-widget-header"><div class="inner"><strong>A <a href="/changelog" target="_blank">new update</a> is available, <a href="#" class="refresh">apply now</a>.</strong> <a href="#" class="dismiss"><i class="fa fa-times"></i></a></div></div>').appendTo($('body'));

			$('.notification .refresh').click(function() {
				window.location.reload();
			});

			$('.notification .dismiss').click(function() {
				$('.notification').fadeOut(300, function() { $(this).remove(); });
			});
		}, false);
		if (window.applicationCache.status == 1) {
			window.applicationCache.update();
			setInterval(function () {
				window.applicationCache.update();
			}, 1000 * 60 * 30); // check every 30 mins
		}
	}

    return {
    };
});