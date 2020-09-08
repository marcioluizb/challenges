Rails.application.routes.draw do
  
	namespace :api do
  	namespace :v1 do
  		post 'login', to: 'users#login'
  		resources :heros
  		get '/heros/get_by_class/:class', to: 'heros#get_hero_by_class'
  	end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
