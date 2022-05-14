# Take Note

## Info

Made by Eric Lie for RFP2202 - FiJ.

## Prompt

You will be creating a full-stack application that implements a note-taking application and management system. This application has three main views to show the user: a sortable list of notes, a note viewing page, and a note editing page.

You **DO NOT** need to complete this test to be considered ready for the TA. (I also don't know what the TA is going to be, so completing this test isn't quite proof of being ready either).

***ONLY USE*** authorized resources while taking this test. (Official documentation, stack overflow). **DO NOT** reference old code or share test information while taking it for the first time!

Be sure to commit often! Good luck!

### ***BEFORE STARTING***

Navigate to this test's root directory and run `npm install`.
Launch mysql service, and seed the database by running the schema.sql file included with this repo.
Run `npm run build` to run webpack.
Run `npm run server` to run the server.

You should be able to see the starter web page.

### Level 1
### Dynamically Render All Notes from Database

- [X] - Write a GET route on the server.js that gets all notes from the database.
- [X] - Refactor the **Notes** component in the client/src/components directory to dynamically render notes from the database on page load.

### Level 2
### Show a Note When Clicked

- [X] - Implement the `NoteView` component so that it will show a full note when clicked. (Title, category, tagline, note).
- [X] - Add a new view into the `App.jsx` that will **only** show the **selected note** when a note is clicked.
- [X] - Add buttons or icons to the `NoteView` component that will allow a user to mark thier notes as `Hidden` or `Starred`. This operation does not yet need to alter the database. A note cannot be both `Hidden` and `Starred` at the same time.

### Level 3
### Edit a Note

- [X] - Implement the `NewNote` component so that it will allow a user to enter information about a new note. (Title, category, tagline, note).
- [X] - Adding a note in the `NewNote` component should also update the list of notes in the `Notes` component.

### Level 4
### Add Notes to Database

- [X] - Write an `Add Note` model function in your server that will add new notes to the database.
- [X] - Write a `POST` route in your server that adds new notes to your database.
- [X] - Ensure that your client-side only updates the notes list when a `POST` request successfully writes to the database.

### Level 5
### Edit Notes

- [] - Write a `PATCH` route in your server that will change whether a note is `Hidden` or `Starred`.
- [] - Connect the `Hidden` and `Starred` buttons on the client side to your
- [] - When a note is clicked on the client-side in the `NoteView` component, allow the user to edit the clicked field. (IE clicking on the title allows the user to change the title.)

### Level 6
### Filter and Sort Notes

- [] - Implement a sorting and filtering functionality on the `Notes` component:
  - [] - User should be able to only see notes that match a certain category.
  - [] - User should be able to see `Starred` notes at the top of the list.
  - [] - User should NOT be able to see `Hidden` notes unless a `Show Hidden` button or checkbox is clicked.

### Level 7
### View Tracking and Most Frequently Viewed

- [] - Refactor the schema to keep track of the number of times a note has been viewed.
- [] - Write a `PATCH` route that will increment the number of views in your database.
- [] - Increment a note's view count every time a note is viewed.
- [] - When listing notes on the `Notes` component, notes with higher view counts should be shown first.