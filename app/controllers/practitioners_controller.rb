class PractitionersController < ApplicationController
    def index
        practitioners = Practitioner.all
        render json: practitioners, except: [:updated_at, :created_at]
    end

end
