class SessionsController < ApplicationController
    # before_action :require_logged_in, only: [:destroy]
    skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render :loggedin
        else
            render json: {"login status": "failed"}
        end
    end

    def destroy # logout function
        logout!
    end
end
