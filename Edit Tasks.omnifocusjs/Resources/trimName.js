var _ = (function() {
  var action = new PlugIn.Action(function(selection, sender) {
    functionLibrary = PlugIn.find("com.KaitlinSalzke.functionLibrary").library(
      "functionLibrary"
    );

    tasks = selection.tasks;

    tasks.forEach(function(task) {
      task.name = task.name.trim();
    });
  });

  action.validate = function(selection, sender) {
    return selection.tasks.length > 0;
  };

  return action;
})();
_;
