Rails.application.routes.draw do
  resources :stocks
  devise_for :users
  get 'home/index'
  get 'home/about'
  root 'home#index'

  post "/" => 'home#index' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
