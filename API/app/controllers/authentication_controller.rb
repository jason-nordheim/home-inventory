class AuthenticationController < ApplicationController
  skip_before_action :authenticate, only: [:login]
  
  def login 
    # find the user 
    # test to see if the user's password digest matches the hash of the password provided 
    @user = User.find_by(username: params[:username])    
    if @user
        if @user.authenticate(params[:password]) 
          begin
            payload = { user_id: @user.id }
            token = JWT.encode(payload, Rails.application.secrets.secret_key_base)      
            render json: { token: token }, status: :created
          rescue => exception
            render json: { error: exception }
          end
        else 
          render json: { error: "Invalid Password"}, status: :unauthorized 
        end 
    else 
      render json: { error: "Invalid Username"}, status: :unauthorized 
    end 
  end 
end
