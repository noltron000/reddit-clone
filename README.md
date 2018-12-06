# BEW-1-2_reddit-clone
Reddit Clone is a project in Make School's Backend 1-2. By utilizing relationships, a large variety of tasks can be implemented. This can be cloned and transformed into other websites that might use a similar routing system.

See the tutorial: <a href='https://www.makeschool.com/academy/track/reddit-clone-in-node-js'>Make School</a>

## Technologies Used
- Node.js
- BCrypt.js
- Express.js
- Express Handlebars
- Express Validator
- Body Parser
- Server Architecture:
	- MongoDB
	- Mongoose
	- Robo 3T
- Testing:
	- Chai
	- Mocha

## To Do:
### Basic `CRUD`
- [X] Start Templating
	- [X] Add & connect Handlebars
	- [X] Add Navbar
		- [X] Add a logo that links to home
		- [X] Add an h1 that links to home
		- [X] Add a CTA button that links to new-flare
	- (**stretch**) Recolor the theme to match FlameWarz' style
- [X] Complete `CRUD` of SubFlames
	- [X] `index` *View* a list of all subflames
		- [X] Navigate to view all the flares of the same subflame
	- [X] `new` *View* subflame creation page
	- [X] `create` *Actionably* create a subflame
		- [X] Add a subflame attribute to our flare resource
		- (**stretch**) Make its ID a hyphen-deliminated string based on its title
	- [X] `show` *View* a single subflame in detail
	- (**stretch**) `edit` *View* subflame update-content page
	- (**stretch**) `update` *Actionably* update a subflame
	- (**stretch**) `destroy` *Actionably* delete a subflame
- [X] Complete `CRUD` of Flares
	- [X] `index` *View* a list of all flares (on current `show` subflame)
		- [X] Make the index route @ `/flares` go to the `flares-index` route
		- [X] Render a flares-index template @ `/flares`
		- [X] Loop over the flares object
		- [X] See what subflame each flare is on
	- [X] `new` *View* flare creation page
		- [X] Make a flares#new route (/flares/new) and template (flares-new.hbs)
		- [X] Add form to flares-new template
		- [X] See each existing subflame, and choose one
		- (**stretch**) Able to search for a subflame
		- (**stretch**) If you create a flare from a subflame, it is automatically entered
	- [X] `create` *Actionably* create a flare
		- [X] Make create flares route and check that form data is sending to new route
		- [X] Add Post model with mongoose
		- [X] Confirm flares are saving to database
		- (**stretch**) Error Handling for missing fields
	- [X] `show` *View* a single flare in detail
		- [X] Make route to `flares#show` route `/flares/:id`
		- [X] display the flare object
		- [X] See & Link the SubFlame
	- (**stretch**) `edit` *View* flare update-content page
	- (**stretch**) `update` *Actionably* update a flare
	- (**stretch**) `destroy` *Actionably* delete a flare
- [X] Complete `CRUD` of Embers
	- [X] `index` *View* a list of all embers (on current `show` flare)
	- [X] `new` *View* ember creation box (on current `show` flare)
	- [X] `create` *Actionably* create a ember (on current `show` flare)
	- (**stretch**) `show` *View* a single ember in detail
		- (**stretch**) Can you show one comment in detail?
	- (**stretch**) `edit` *View* ember update-content box (on current `show` flare)
	- (**stretch**) `update` *Actionably* update a ember (on current `show` flare)
	- (**stretch**) `destroy` *Actionably* delete a ember (on current `show` flare)
- [X] Sign Up & Log In (`CRUD` of Pyros)
	- (**stretch**) `index` *View* a list of all pyromancers
	- [X] `new` *View* pyromancer creation page (*sign up*)
	- [X] `create` *Actionably* create a pyromancer (*sign up*)
		- [X] use bcrypt.js to encrypt passwords
	- (**stretch**) `show` *View* a single pyromancer in detail
		- Can you make an author's username a link that displays that users's profile at `/users/:username`?
		- Can you make a `/profile` route that loads the current user and displays their posts and comments?
	- (**stretch**) `edit` *View* pyromancer update-content page
	- (**stretch**) `update` *Actionably* update a pyromancer
	- (**stretch**) `destroy` *Actionably* delete a pyromancer
	- [X] `sign in`
		- (**stretch**) Require a password confirmation field.
		- (**stretch**) Plan out how you would do a 'forget password' process.
	- [X] `sign out`
		- (**stretch**) Add a Remember Me checkbox
			- What is the difference from when it is checked or not?

### Controllers Etc.
- [X] Testing
	- [X] Test suite for `auth.js` & pyros
	- (**stretch**) Test suite for `subflames.js`
	- (**stretch**) Test suite for `flares.js`
		- (**stretch**) Test flares#create
		- (**stretch**) Test inability to create flares if not logged in
	- (**stretch**) Test suite for `embers.js`
- [X] Connect embers, flares, and subflames
	- [X] Each subflame has one parent document
	- [X] Each subflame has many flares
	- [X] Each flare has one subflame
	- [X] Each flare has many embers
	- [X] Each ember has one flare
	- (**stretch**) Each ember has many embers.
- [X] Associate flares, embers, and votes with their author
	- [X] Each author has many embers
	- [X] Each ember has one author
	- [X] Each author has many flares
	- [X] Each flare has one author
- [ ] `update` Vote a flare up or down
- [ ] `update` Vote a ember up or down
- (**stretch**) Search Functionality