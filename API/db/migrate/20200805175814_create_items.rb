class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table      :items do |t|
      t.string        :name
      t.float         :est_value
      t.float         :acc_value
      t.date          :purchase_date, 
      t.boolean       :selling, :default => false 
      t.text          :description
      t.string        :category, :default => 'Uncategorized'
      t.string        :serial
      t.belongs_to    :users 
      t.belongs_to    :vendors 
      t.belongs_to    :locations 
      
      t.timestamps
    end
  end
end
