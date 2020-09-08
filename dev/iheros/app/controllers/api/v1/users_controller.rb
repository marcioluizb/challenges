module Api::V1
	class UsersController < Api::V1::ApiController
		before_action :authorized, only: [:show]

		def login
		    @user = User.find_by('email= ? and active = 1', params[:email])

		    if @user && @user.authenticate(params[:password])
		      token = encode_token({user_id: @user.id})
		      render json: {user: {id: @user.id, email: @user.email, active: @user.active, token: token}}, status: :ok
		    else
		      render json: {message: 'Usuário ou senha inválido'}, status: :bad_request
		    end
	  	end
	end
end