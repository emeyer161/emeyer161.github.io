var database = {
	comments: [],
	posts: [
		{ id: 1, title: "First", body: "This is first post...", created_at: Date.now(), updated_at: Date.now() },
		{ id: 2, title: "Second...", body: "Second post created...", created_at: Date.now(), updated_at: Date.now() },
		{ id: 3, title: "Third...", body: "This post was made third...", created_at: Date.now(), updated_at: Date.now() }
	],
	users: [
		{ id: 1, first_name: "Eric", last_name: "Meyer", created_at: Date.now(), updated_at: Date.now() }
	],
	projects: []
};

module.exports = database;