## Mini Application for remembering which books to read

## Functionality of app

Currently you can add books you would like to read and they get stored in the state. However, due to there being no database or schema for the data to be added, upon refresh the data you entered is lost. This would be easily solved with a database however to simply remember the books that have been added and to truly delete them.

It also does not allow you to have an empty input field before submitting.

## What I learnt.

Whilst creating this application I got very familiar with passing down references of functions where the this binding was implicity bound to the state of where the function came from. (E.g. due to the arrow functions)

Became very useful managing the states of different components from a single component and keeping single sources of truth.
