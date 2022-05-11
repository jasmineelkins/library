class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # GET /reviews
  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      reviews = user.reviews.all
    else
      reviews = Review.all
    end
    render json: reviews
  end

  # GET /reviews/:id
  def show
    review = find_review
    render json: review
  end

  # POST /reviews
  def create
    new_review = Review.create!(review_params)
    render json: new_review, status: :created
  end

  # UPDATE /reviews/:id
  def update
    review = find_review
    review.update!(review_params)
    render json: review
  end

  # DELETE /reviews/:id
  def destroy
    review = find_review
    review.destroy
    render json: {}
  end

  private

  def review_params
    params.permit(:content, :rating, :user_id, :book_id)
  end

  def find_review
    Review.find_by!(id: params[:id])
  end

  def render_invalid_response(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
