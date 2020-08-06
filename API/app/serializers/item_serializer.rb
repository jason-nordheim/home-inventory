class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :est_value, :acc_value, :purchase_date, :selling, :description, :category, :references, :references
end
