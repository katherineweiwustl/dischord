class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    
    attr_reader :password
    after_initialize :ensure_session_token
    
    # self. methods are called on the class itself, instance methods are not

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return { error: "User does not exist with that username"} if user.nil?
        user.verify_password(password) ? user : {error: "Passwords do not match"}
        # condition ? if true : if false        
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64) # SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end
   

    def password=(password)
        # when instance var is created with @, it will run the validations on it
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def verify_password(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
        # is_password? is a method in the bcrypt library that takes the password that the user inputs and hashes it, sees if it is the same as the password_digest (converted to bcrypt object)
    end

    private 
    def ensure_session_token
        # return self.reset_session_token if self.session token.nil?
        self.session_token ||= SecureRandom.base64(64) # SecureRandom::urlsafe_base64
        # session[:session_token] ||= self.session_token
        # lazy assignment ^
    end

end
