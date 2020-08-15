Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :locations
  resources :items
  resources :vendors
  resources :users

  get "my_info", to: "users#my_info"

  # Create custom route for authentication 
  # - Controller: Authentication 
  # - Method: `login`
  post "/login", to: "authentication#login"
end
