exports.up = function (knex) {
  return knex.schema.createTable("location", (t) => {
    t.increments("id");
    t.string("name");
    t.string("type");
    t.integer("user_id").notNullable().references("id").inTable("user").index();
    t.integer("address_id")
      .notNullable()
      .references("id")
      .inTable("address")
      .index();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("location");
};
