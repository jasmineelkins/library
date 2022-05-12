class BookSerializer < ActiveModel::Serializer
  attributes :title, :author, :description, :id, :image, :pages, :status

  has_many :reviews
end
