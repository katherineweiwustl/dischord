class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  # protect_from_forgery unless: -> { request.format.json? }
  # protect_from_forgery with: :exception
  helper_method :current_user, :logged_in? # provides this method as a helper method to all views :thumbcat:

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token]) # grabs session token from header using session object
        # || means only runs if current_user is nil since if there is already a current user then it is useless (lazy assignment)
        # will search thru database for use with certian session token
        # @current_user will be accessible everywhere since everyone inherits from application_controller
        # debugger
    end

    # log in function is in user AND sessions controller
    def login!(user) # create session token and store it for that user
        session[:session_token] = user.reset_session_token!
        # rails creates a session object for us
    end

    def logout!
      current_user.reset_session_token!
      session[:session_token] = nil # header
    end

    def logged_in?
        !!current_user # if there is a current user then the current user will be a user object, curr user will be null if there is no current user; !! makes everything a bool
    end

    def require_logged_in
      render json: ['Must Be Logged In'] unless logged_in?
    end

end
