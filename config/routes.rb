Rails.application.routes.draw do
  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :Videos, controller: 'videos_controller'
    end
  end
end