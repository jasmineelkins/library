class BookSerializer < ActiveModel::Serializer
  attributes :title, :author, :description, :id, :image, :pages

  has_many :reviews
end
