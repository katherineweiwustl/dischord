class Server < ApplicationRecord
    validates :name, :owner_id, presence: true
end
