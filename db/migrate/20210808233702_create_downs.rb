class CreateDowns < ActiveRecord::Migration[5.2]
    def change
      create_table :down do |t|
        t.timestamps
      end
    end
  end
  