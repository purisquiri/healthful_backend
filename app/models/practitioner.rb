class Practitioner < ApplicationRecord
    has_many :user_practitioners
    has_many :users, through: :user_practitioners
    serialize :specialties, Array
    serialize :languages, Array
    serialize :reviews, Array

end
