class PractitionersController < ApplicationController
    def index
        practitioners = Practitioner.all
        render json: practitioners, except: [:updated_at, :created_at]
    end

    def show
        practitioner = Practitioner.find(params[:id])
        # practitioner = Practitioner.find_by(id: params[:id])

        render json: practitioner, except: [:updated_at, :created_at]
    end
end
