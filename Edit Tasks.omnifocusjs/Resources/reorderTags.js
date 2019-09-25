/*{
	"type": "action",
	"targets": ["omnifocus"],
	"author": "Kaitlin Salzke",
	"identifier": "com.KaitlinSalzke.reorderTags",
	"version": "1.1",
	"description": "Reorders the tags of the selected task(s) based on the order in 'Tags'.",
	"label": "Reorder Tags",
	"shortLabel": "Reorder Tags"
}*/
var _ = (function() {
  var action = new PlugIn.Action(function(selection, sender) {
    functionLibrary = PlugIn.find("com.KaitlinSalzke.functionLibrary").library(
      "functionLibrary"
    );

    functionLibrary.reorderTags(selection.tasks);
  });

  action.validate = function(selection, sender) {
    // validation code
    // selection options: tasks, projects, folders, tags
    return selection.tasks.length > 0;
  };

  return action;
})();
_;
