class ServersController < ApplicationController
    # Server is the object/db "type"
    # .save is used to save something in the database
    skip_before_action :verify_authenticity_token

    def index
        # using a database query to pull all the servers in which the user is a member of
        #figure out how to send a query param with api request
        allServers = params[:server][:allServers] # in the servers get axios request there's a allServers param
        if (allServers)
          @servers = Server.all
        else 
          @servers = current_user.servers # this is just getting the servers that the user is a part of through the members db
        # end
        render 'servers.json'
    end

    def show
        server= Server.find_by(id: params[:id])
        if server
            # render(server)
            render json: server            
        else
            render json: {:error => 'server does not exist'}, status: 404
        end
    end

    def create
        # create a new server using parameters that are obligatory in strong
        # params
        @server = Server.new(server_params)
        if @server.save!
            Member.create({:server_id => @server.id, :user_id => @server.owner_id})
            render '_server.json'
        else
            render json: @server.errors.full_messages, status: 400
        end
    end

    def update
        server = Server.find_by(id: params[:id])
        if server.update(server_params)
            render json: { server: server }
        else
            render json: server.errors.full_messages, status: 400
        end
    end
    

    def destroy
        server=Server.find_by(id: params[:id])
        server.destroy
    end

    private

    def server_params
        params.require(:server).permit(:name, :owner_id)
    end

end

