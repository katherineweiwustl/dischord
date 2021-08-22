class Member < ApplicationRecord
    validates :server_id, :user_id, presence: true

    # in a joins table, the belongs_to is the link
    
    belongs_to :user
    #   primary_key: id,
    #   foreign_key: user_id, # user's foreign key (user_id) in members table is user_id
    #   class: User

    belongs_to :server
end



# 1 4
# 1 3
# 2 63
# 5 234
# 1 63
# 2 3