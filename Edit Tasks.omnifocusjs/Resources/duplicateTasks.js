/*{
	"type": "action",
	"targets": ["omnifocus"],
	"author": "Kaitlin Salzke",
	"identifier": "com.KaitlinSalzke.duplicateTasks",
	"version": "1.0",
	"description": "Duplicate tasks in place",
	"label": "Duplicate Task(s)",
	"shortLabel": "Duplicate Task(s)"
}*/
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