class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :image
      t.string :description
      t.string :genre
      t.string :pages

      t.timestamps
    end
  end
end
