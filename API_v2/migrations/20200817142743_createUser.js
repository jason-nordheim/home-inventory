

exports.up = function (knex) {
  return knex.schema.createTable("user", (t) => {
    t.increments("id");
    t.string("username").unique()
    t.string("password_digest");
    t.string("name")
    t.string("email")
    t.string("phone")
    t.text("bio")
    t.timestamps(true, true)
  });
};


exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
