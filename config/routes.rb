Rails.application.routes.draw do
  resources :sessions, only: [:new, :create, :destroy]
  resources :user_practitioners
  resources :practitioners
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
