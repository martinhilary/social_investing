Rails.application.routes.draw do
  resources :stocks
  resources :posts
  # resources :articles
  devise_for :users
  get 'home/index'
  get 'home/about' 
  root 'home#index'
  # get 'posts#index'
  # get '' 
  get '/articles/accounting' => 'articles#index'
  get '/articles/stocks' => 'articles#stocks'
  get '/articles/infographics' => 'articles#infographics'
  get '/articles/quotes' => 'articles#quotes'
  get '/articles/financials' => 'articles#financials' 

  post "/" => 'home#index' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
