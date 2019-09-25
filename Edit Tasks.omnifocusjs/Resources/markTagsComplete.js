/*{
"type": "action",
"targets": ["omnifocus"],
"author": "Kaitlin Salzke",
"identifier": "com.KaitlinSalzke.markTagsComplete",
"version": "1.0",
"description": "",
"label": "Mark Tags Complete",
"shortLabel": "Mark Tags Complete"
}*/

var _ = (function() {
  var action = new PlugIn.Action(function(selection, sender) {
    // action code
    // selection options: tasks, projects, folders, tags

    functionLibrary = PlugIn.find("com.KaitlinSalzke.functionLibrary").library(
      "functionLibrary"
    );

    var tasks = selection.tasks;

    var tagToAdd = tagNamed("⠀");

    tasks.forEach(function(task) {
      task.addTag(tagToAdd);
    });

    functionLibrary.reorderTags(tasks);
  });

  action.validate = function(selection, sender) {
    // validation code
    // selection options: tasks, projects, folders, tags
    return selection.tasks.length > 0;
  };

  return action;
})();
_;
