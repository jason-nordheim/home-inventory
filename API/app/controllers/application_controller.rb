class ApplicationController < ActionController::API
  before_action :authenticate 

  def authenticate 
    auth_header = request.headers["Authorization"] 
    if auth_header
      token = auth_header.split(' ')[1]
      if token 
        decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base) 
        if decoded_token
          payload = decoded_token[0]
          @user_id = payload["user_id"]
          return @user = User.find(@user_id)
        else 
          render json: { error: "Unable to decode token" }, status: :unauthorized
        end 
      else
        render json: { error: "No token recieved." }, status: :unauthorized
      end 
    else 
      render json: { error: "Requested resource is protected. You must be logged in to retrieve this resource" }, status: :unauthorized
    end 
  end 

end
