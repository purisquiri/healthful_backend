class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user
            session[:user_id]= user.id
            render json:{
                status: :created,
                logged_in: true,
                user: user
            }
        else
            flash[:errors]= ["Email not found. Try again or sign up"]
        end
    end

    def destroy
        session.delete(:user_id)
    end

end
