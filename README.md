# About

This repository contains a series of Omni Automation small single-file plugins for OmniFocus.

_Please note that all scripts on my GitHub account (or shared elsewhere) are works in progress. If you encounter any issues or have any suggestions please let me know--and do please make sure you backup your database before running scripts from a random amateur on the internet!)_

## Known issues 

None yet! 🤞

# Installation & Set-Up

(For instructions on getting started with Omni Automation, see [here](https://kaitlinsalzke.com/how-to/how-to-add-a-omnijs-plug-in-to-omnifocus-and-assign-a-keyboard-shortcut/).)

1. Click on the green `Clone or download` button above to download a `.zip` file of the file in this GitHub repository.
2. Unzip the downloaded file.
3. Move the `.omnifocusjs` file(s) you want to use to your OmniFocus plug-in library folder.

# Actions

## Add One Day To Due Date

This action updates the due date of the selected task(s) to one day after the existing (effective) due date.

If the task has no effective due date, the due date is set to tomorrow at the default due time set in the OmniFocus settings.

## Duplicate Tasks

This action creates a duplicate of the currently selected task(s) after the current instance in the database.

_Note that OmniFocus does have a built-in "Duplicate" function however it is disabled in custom perspectives and therefore this action can be used instead._

## Mark Completed Yesterday

This marks the selected task(s) as completed at 11:59pm of the previous day and is intended to be useful for reporting days on which tasks were completed e.g. in combination with my [Completed Task Report plugin](https://github.com/ksalzke/completed-task-report-omnifocus-plugin).

## Trim Name

This action trims any whitespace from the beginning or end of name(s) of the selected task(s).

# Contributing

If you have corrections, suggestions for actions to be added, or encounter any issues, please let me know. Issues and/or pull requests welcome.