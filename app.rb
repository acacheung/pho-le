require 'bundler'
Bundler.setup
require 'sinatra'
require 'sass'

set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
  erb :index
end

get '/menu' do
  erb :menu
end

get '/allston/menu' do
  erb :allston_menu
end

get '/cambridge/menu' do
  erb :cambridge_menu
end

get '/press' do
  erb :press
end

get '/contact' do
  erb :contact
end
