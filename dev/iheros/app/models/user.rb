class User < ApplicationRecord
	has_secure_password

	validates :email, presence: {message: 'email não pode ser vazio'}
	validates :email, uniqueness: {message: 'email já está cadastrado'}, on: :create
	validates :password, presence: {message: 'senha não pode ser vazia'}
end
