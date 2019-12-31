var _ = (function() {
	var action = new PlugIn.Action(function(selection, sender) {
		functionLibrary = PlugIn.find("com.KaitlinSalzke.functionLibrary").library(
			"functionLibrary"
		);

		now = new Date();
		now.setHours(23);
		now.setMinutes(59);

		yesterday = functionLibrary.adjustDateByDays(now, -1);

		selection.tasks.forEach(function(task) {
			task.markComplete(yesterday);
		});
	});

	action.validate = function(selection, sender) {
		return selection.tasks.length > 0;
	};

	return action;
})();
_;
