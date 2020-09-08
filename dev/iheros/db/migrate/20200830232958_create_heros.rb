class CreateHeros < ActiveRecord::Migration[5.2]
  def change
    create_table :heros do |t|
      t.string :name, null: false, default: ""
      t.string :hero_class, null: false, default: ""
      t.decimal :lat, null: false, precision: 10, scale: 6
      t.decimal :lng, null: false, precision: 10, scale: 6
      t.boolean :active, null: false, default: true

      t.timestamps
    end
  end
end
