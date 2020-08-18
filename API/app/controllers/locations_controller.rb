class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :update, :destroy]

  # GET /locations
  def index
    @locations = Location.find_by(user_id: @user.id)
    render json: @locations
  end

  # GET /locations/1
  # def show
  #   render json: @location
  # end

  # POST /locations
  def create
    byebug
    @location = Location.new(
      name: params[:name], 
      street1: params[:street1], 
      street2: params[:street2], 
      city: params[:city], 
      state: params[:state], 
      zip: params[:zip], 
      category: params[:cateogry], 
      user_id: @user.id 
    )

    if @location.save
      render json: @location, status: :created
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations/1
  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locations/1
  def destroy
    @location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_params
      params.require(:location).permit(:name, :street1, :street2, :city, :state, :zip, :type)
    end
end
