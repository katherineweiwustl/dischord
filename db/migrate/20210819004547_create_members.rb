class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.integer :user_id
      t.integer :server_id
      t.timestamps
    end
    add_index :members, :user_id, unique: true
    add_index :members, :server_id, unique: true

  end
end
