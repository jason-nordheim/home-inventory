class Item < ApplicationRecord
  belongs_to :user 
  belongs_to :vendor 
  belongs_to :location
end
