class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :street1, :street2, :city, :state, :zip, :phone, :email, :description
  has_one :User
end
