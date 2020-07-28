const TABLE_NAME = "items";

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.timestamps(true, true);
    table.integer("location_id").references("id").inTable("locations");
    table.integer("user_id").references("id").inTable("users");
    table.integer("vendor_id").references("id").inTable("vendors")
    table.string("name", 200).unique();
    table.string("brand") 
    table.string("model")
    table.string("serial")
    table.float("est_value");
    table.float("acc_value");
    table.boolean("insured").defaultTo(false)
    table.boolean("selling").defaultTo(false) 
    table.date("purchase_date").defaultTo(knex.fn.now(6));
    table.string('condition')
    table.string('color')
    table.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
