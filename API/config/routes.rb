Rails.application.routes.draw do
  resources :locations
  resources :items
  resources :vendors
  resources :users

  get "my_info", to: "users#my_info"

  # Create custom route for authentication 
  # - Controller: Authentication 
  # - Method: `login`
  post "/login", to: "authentication#login"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
