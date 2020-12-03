class ApplicationController < ActionController::API

    private

    def current_user
        @current_user= User.find_by(is: session[:user__id])
    end

    def logged_in?
        !current_user.nil?
    end


end
