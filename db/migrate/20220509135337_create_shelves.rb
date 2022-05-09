class CreateShelves < ActiveRecord::Migration[7.0]
  def change
    create_table :shelves do |t|
      t.string :name
      t.string :book_id
      t.string :user_id

      t.timestamps
    end
  end
end
