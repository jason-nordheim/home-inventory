class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :user do |t|
      t.string :username,  unique: true
      t.string :password_digest
      t.string :name
      t.string :email
      t.string :phone
      t.string :bio

      t.timestamps
    end
  end
end
