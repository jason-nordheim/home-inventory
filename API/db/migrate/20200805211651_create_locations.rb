class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table    :location do |t|
      t.string      :name
      t.string      :street1
      t.string      :street2
      t.string      :city
      t.string      :state
      t.string      :zip
      t.string      :type 
      t.belongs_to  :user

      t.timestamps
    end
  end
end
