class UsersController < ApplicationController

    def new
        user= User.new

        render json: user
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id]= user.id
        end
        render json: user
    end

    def show
        @user= User.find_by(params[:id])
    end


    def update
        User.find(params[:id]).update(user_params)
        render json: User.find(params[:id])
    end

    def destroy
        user = User.find(params [:id])
        user.destroy
        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:name, :email)
    end

end
