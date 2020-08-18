class UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create]

  def my_info  
    render json: @user 
  end 

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new({
      name: params[:name], 
      email: params[:email], 
      username: params[:username], 
      password: params[:password], 
      phone: params[:phone],
      bio: params[:bio]
    })

    if @user.save
      my_info
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :password_digest, :name, :email, :phone, :bio)
    end
end
