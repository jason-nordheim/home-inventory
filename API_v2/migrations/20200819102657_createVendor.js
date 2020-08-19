exports.up = function (knex) {
  return knex.schema.createTable("vendor", (t) => {
    t.increments("id")
    t.string("name")
    t.string("phone")
    t.string("email")
    t.text('notes')
    t.integer("user_id").notNullable().references("id").inTable("user").index();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("vendor");
};
