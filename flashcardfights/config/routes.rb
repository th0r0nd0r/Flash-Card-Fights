Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :questions, only: [:new, :create, :index, :show, :update, :destroy]
    resources :courses, only: [:new, :create, :index, :show, :update, :destroy]
    resources :quizzes, only: [:new, :create, :index, :show, :update, :destroy] do
      resources :quiz_attempts, only: [:create, :destroy, :show]
    end
    resources :challenges, 
    resources :subjects, only: [:new, :create, :index, :show, :update, :destroy]
    resources :questions, only: [:new, :create, :index, :show, :update, :destroy] do
      resources :question_attempts, only: [:create, :destroy, :show]
    end
  end
end
