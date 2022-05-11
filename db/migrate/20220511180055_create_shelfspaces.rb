class CreateShelfspaces < ActiveRecord::Migration[7.0]
  def change
    create_table :shelfspaces do |t|
      t.integer :book_id
      t.integer :shelf_id

      t.timestamps
    end
  end
end
