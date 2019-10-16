var _ = (function() {
  var action = new PlugIn.Action(function(selection, sender) {
    tasksToChange = selection.tasks;

    // get default due time to use if task has no due date
    defaultDueTime = settings.objectForKey("DefaultDueTime");
    defaultDueTimeSplit = defaultDueTime.split(":");
    defaultDueHours = defaultDueTimeSplit[0];
    defaultDueMinutes = defaultDueTimeSplit[1];

    // get 'task' for each selected project
    selection.projects.forEach(function(project) {
      tasksToChange.push(project.task);
    });

    tasksToChange.forEach(function(task) {
      // get existing due date
      existingDueDate = task.effectiveDueDate;

      // if no due date, use now as starting point; otherwise use existing due date
      if (existingDueDate == null) {
        startingDueDate = new Date();
        startingDueDate.setHours(defaultDueHours);
        startingDueDate.setMinutes(defaultDueMinutes);
      } else {
        startingDueDate = existingDueDate;
      }

      // add one day to get new due date
      timeToAdd = new DateComponents();
      timeToAdd.day = 1;
      newDueDate = Calendar.current.dateByAddingDateComponents(
        startingDueDate,
        timeToAdd
      );

      // set the due date of the task
      task.dueDate = newDueDate;
    });
  });

  action.validate = function(selection, sender) {
    return selection.tasks.length > 0 || selection.projects.length > 0;
  };

  return action;
})();
_;
