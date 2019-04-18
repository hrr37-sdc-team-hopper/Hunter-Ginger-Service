# Getting Started

- **Note:** Nodemon should be installed globally.
- Open a terminal instance for every service and one for the proxy.
- Run 'npm install' for every service and the proxy.
- Run 'npm run build' for every service to create a bundle.js file.
- Run 'npm start' for every service and the proxy.
- In a browser navigate to localhost:3000

##Crud API
\*Create:

\*Post: '/books/:id (creates a book at ":id")

\*Read:

\*Get: '/books/:id/authors/title' (gets all titles associated with the id)

\*Get '/books/:id/authors/status' (gets all statuses associated with the id)

\*Get '/books/:id/authors/:id' (gets all id associated with the id)

\*Get '/books/:id/authors/:id/titles' (gets all titles associated with the id)

\*Update:

\*Put '/books/:id' (modifies data at book ":id")

\*Delete

\*Delete '/books/:id' (deletes the book at the id)

Note: it does not seem
