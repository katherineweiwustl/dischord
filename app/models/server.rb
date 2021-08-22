class Server < ApplicationRecord
    validates :name, :owner_id, presence: true

    has_many :members


    has_many :users, 
      through: :members,    
      source: :user
    
end
