module Api::V1	
	class ApiController < ApplicationController
		
		before_action :authorized

	  def encode_token(payload)
	    JWT.encode(payload, '14dd2c7b247593e76088b3eec8a9d04ec071f489c82cde58de4b092e24a806cc78fa4af7560f18ac2b2d4b85356d097497b7cdf426b065dd91f40a2a9444a6dd')
	  end

	  def auth_header
	    # { Authorization: 'Bearer <token>' }
	    request.headers['Authorization']
	  end

	  def decoded_token
	    if auth_header
	      token = auth_header.split(' ')[1]
	      # header: { 'Authorization': 'Bearer <token>' }
	      begin
	        JWT.decode(token, '14dd2c7b247593e76088b3eec8a9d04ec071f489c82cde58de4b092e24a806cc78fa4af7560f18ac2b2d4b85356d097497b7cdf426b065dd91f40a2a9444a6dd', true, algorithm: 'HS256')
	      rescue JWT::DecodeError
	        nil
	      end
	    end
	  end

	  def logged_in_user
	    if decoded_token
	      user_id = decoded_token[0]['user_id']
	      @user = User.find_by(id: user_id)
	    end
	  end

	  def logged_in?
	    !!logged_in_user
	  end

	  def authorized
	    render json: { message: 'Você não está logado.' }, status: :unauthorized unless logged_in?
	  end
	  
	end
end
