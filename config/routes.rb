Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :servers
  resource :session, only: [:create, :destroy] # only one that is singular
  root to: 'static_pages#root'
end
