class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :street1, :street2, :city, :state, :zip, :belongs_to
end
