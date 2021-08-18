class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null:false
      t.integer :owner_id, null:false
      t.integer :member_ids, null:false, array:true, :default => []
      t.timestamps
    end
  end
end
