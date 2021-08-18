json.server do # make top level key called servers, all servers will be under this key
    @servers.each do |server|
        json.set! server.id do
            json.id server.id
            json.name server.name
            json.owner_id server.owner_id
            json.member_ids server.member_ids
        end
    end
end



