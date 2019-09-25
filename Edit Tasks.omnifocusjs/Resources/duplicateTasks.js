var _ = (function() {
	var action = new PlugIn.Action(function(selection, sender) {
		selection.tasks.forEach(function(task) {
			duplicateTasks([task], task.after);
		});
	});

	action.validate = function(selection, sender) {
		return selection.tasks.length > 0;
	};

	return action;
})();
_;
