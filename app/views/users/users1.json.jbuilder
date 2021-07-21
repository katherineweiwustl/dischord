json.users @users do |user|
    # json.users creates a key, everything after that is under top level key of users
    # now we are inside the users key, it is iterating; making an array
    json.username user.username
    json.password user.password
    json.email user.email
    
end