exports.up = function (knex) {
  return knex.schema.createTable("location", (t) => {
    t.increments("id");
    t.string("name");
    t.string("type")
    t.integer("user_id").references('id').inTable('user')
    t.integer("address_id").references('id').inTable('address')
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("location");
};
