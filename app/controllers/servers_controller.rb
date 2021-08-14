class ServersController < ApplicationController
    # params = the columns
    # Server is the object/db "type"
    # .save is used to save something in the database
    skip_before_action :verify_authenticity_token

    def index
        render Server.all
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
        s_params = {:name => params[:server][:name], :owner_id => 1231}
        @server = Server.new(s_params)
        if server.save!
            render json: { 'server created': server.to_json }
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
        params.require(:server).permit(:name)
    end

end
