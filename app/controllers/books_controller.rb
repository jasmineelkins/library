class BooksController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # GET /books
  def index
    books = Book.all
    render json: books
  end

  # GET /books/:id
  def show
    book = find_book
    render json: book
  end

  # POST /books
  def create
    new_book = Book.create!(book_params)
    render json: new_book, status: :created
  end

  # UPDATE /books/:id
  def update
    book = find_book
    book.update!(book_params)
    render json: book
  end

  # DELETE /books/:id
  def destroy
    book = find_book
    book.destroy
    render json: {}
  end

  private

  def book_params
    params.permit(:title, :author, :description, :image, :pages)
  end

  def find_book
    Book.find_by!(id: params[:id])
  end

  def render_invalid_response(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
