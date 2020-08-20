
exports.up = function(knex) {
   return knex.schema.createTable("vendor_address", (t) => {
     t.increments("id");
     t.integer('vendor_id')
      .notNullable()
      .references('id')
      .inTable('vendor')
      .index() 
     t.integer('address_id')
      .notNullable() 
      .references('id')
      .inTable('address')
      .index() 
     t.timestamps(true, true);
   });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("vendor_address");
};
