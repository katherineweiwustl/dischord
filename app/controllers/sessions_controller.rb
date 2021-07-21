class SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]

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
        redirect_to(users_url)
    end
end