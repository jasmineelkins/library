class ShelvesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # GET /shelves
  def index
    all_shelf_rows = Shelf.all
    render json: all_shelf_rows
  end

  # GET /shelves/:id
  def show
    shelf_row = find_shelf
    render json: shelf_row
  end

  # GET /shelves/:name
  # return all books on a shelf
  def get_all_books_on_shelf
    # find all shelves for logged in user:
    users_shelf = Shelf.where(user_id: params[:user_id])

    # find all shelf rows with the specified name
    shelf = users_shelf.where(name: params[:name])
  end

  # POST /shelves
  def create
    new_shelf = Shelf.create!(shelf_params)
    render json: new_shelf, status: :created
  end

  # UPDATE /shelves/:id
  def update
    shelf = find_shelf
    shelf.update!(shelf_params)
    render json: shelf
  end

  # DELETE /shelves/:id
  def destroy
    shelf = find_shelf
    shelf.destroy
    render json: {}
  end

  private

  def shelf_params
    params.permit(:name, :book_id, :user_id)
  end

  def find_shelf
    Shelf.find_by!(id: params[:id])
  end

  def render_invalid_response(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
