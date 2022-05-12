Rails.application.routes.draw do
  resources :shelfspaces
  resources :reviews
  resources :shelves
  resources :books

  resources :users, only: %i[index create show update] do
    resources :books, only: %i[show index]
    resources :reviews, only: %i[index show create]
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/shelves/:name', to: 'shelves#get_all_books_on_shelf'

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
