var _ = (function() {
  var action = new PlugIn.Action(function(selection, sender) {
    functionLibrary = PlugIn.find("com.KaitlinSalzke.functionLibrary").library(
      "functionLibrary"
    );

    tasks = selection.tasks;

    tagToAdd = tagNamed("⠀");

    tasks.forEach(function(task) {
      task.addTag(tagToAdd);
    });

    // if reorderTags plugin installed, reorder tags
    reorderTagsPlugin = PlugIn.find("com.KaitlinSalzke.reorderTags");
    if (reorderTagsPlugin !== null) {
      reorderTagsPlugin.library("reorderTagsLibrary").reorderTags(tasks);
    }
  });

  action.validate = function(selection, sender) {
    return selection.tasks.length > 0;
  };

  return action;
})();
_;
