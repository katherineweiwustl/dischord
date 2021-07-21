class UsersController < ApplicationController
skip_before_action :verify_authenticity_token

def new
    render :new
end
# Index should return all of a resource. Called when route ends in /users and method is GET
def index
    # render json: User.all
    # calling a fxn on the model would be CAPITALIZED

    @users = User.all
    render :users;

    # render json: {:fxn => "index"}
    # print('this is the index fxn')
end

# Return a single resource. Called when route ends in /users/:id and method is GET
def show
    # localhost:3000/users/userID
    # used to show a certain/specific user; showing one of the users
    # render json: {userid: params[:id]}
    
    # where(id: 2)[0]
    # user = User.where(id: params[:id])[0]
    # User.where returns an array since it's a search function
    # in show, we are looking for ONE thing

    # when finding a single thing, do find_by. it does NOT return an array :)
    user = User.find_by(id: params[:id])
    if user
       render json: user
    else
        render json: {:error => 'user does not exist'}, status: 404
    end
    # print('this is the show fxn')
end

# Creates a resource. Called when route ends in /users and method is POST
def create
    user = User.new(user_params)
    if user.save
        render json: {success: true}
    else
        render json: user.errors.full_messages, status: 400
        
    end
    print('this is the create fxn')
end

# Update an existing resource. Called when route ends in /users/:id and method is PUT/PATCH
def update
    user = User.find_by(id: params[:id])
    if user.update(user_params)
        render json: {'updated user': user.to_json}
    else
        render json: {'error': 'user not able to be updated'}
    end
    print('this is the update fxn')
end

# To delete a resource from database.  Called when route ends in /users/:id and method is DELETE
def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    print('this is the destroy fxn')
end

def user_params
    params.require(:user).permit(:username,:password)

    # user: {
    #     {
    #     username: 'isdfa', 
    #     password: '234234'}
    #     }
end

end