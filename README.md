## Mini App for remembering which books to read

## Functionality of app

Currently you can add a book to the list of books however as there is no database it will be forgotten upon a refresh. I debated using localStorage but this again is easily lost. The true solution would be to draw up a schema for sql and insert data into it this way.

Also would result in actually being able to delete books already read.

## What I learnt

The reason I wanted to do this project quickly was to gain more experience of managing different states in different components. Due to using an arrow function you can bind implicitly that state in the component to that function. Then by passing a reference down to a child component you are able to update the state in the parent. Keeping components small and manageable was also a take away from this quick project.
