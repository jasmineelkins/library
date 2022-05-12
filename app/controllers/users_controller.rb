class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  def index
    users = User.all
    render json: users, include: :reviews
  end

  def create
    # debugger

    # create new User & save hashed password to db
    user = User.create!(user_params)

    # create first 3 shelves (default for every user)
    Shelf.create!(name: 'Currently Reading', user_id: user.id)
    Shelf.create!(name: 'Want to Read', user_id: user.id)
    Shelf.create!(name: 'Read', user_id: user.id)

    # save user's ID in the session hash
    session[:user_id] = user.id

    # return user object json
    render json: user, status: :created
  end

  def show
    # if User authenticated, return user obj
    current_user = User.find_by(id: session[:user_id])
    if current_user
      render json: current_user
    else
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end

  # UPDATE '/user/:id'
  def update
    user = User.find_by(id: params[:user_id])
    user.update!(user_params)
    render json: user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :name)
  end

  def render_invalid(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
