class User < ApplicationRecord
  has_secure_password
  has_many :items 
  has_many :vendors 
  has_many :locations 
  validates :username, uniqueness: true 
  validates :email, uniqueness: true 
end
