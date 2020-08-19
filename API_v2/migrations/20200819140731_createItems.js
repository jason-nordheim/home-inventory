
exports.up = function(knex) {
  return knex.schema.createTable("item", (t) => {
    t.increments("id");
    t.string("name")
    t.decimal("est_value");
    t.decimal("acc_value");
    t.string("category")
      .defaultTo('Uncategorized')
    t.string("make");
    t.string("model")
    t.string("serial_number")
    t.date("purchase_date")
    t.boolean("selling")
      .defaultTo(false)
      t.integer("location_id")
      .references("id")
      .inTable('location')
      .index()
    t.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('user')
      .index() 
    t.text("notes")
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  
};
