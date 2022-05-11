class ShelfspacesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # GET /shelfspaces
  def index
    shelfspaces = Shelfspace.all
    render json: shelfspaces
  end

  # GET /shelfspaces/:id
  def show
    shelfspace = find_shelfspace
    render json: shelfspace
  end

  # POST /shelfspaces
  def create
    new_shelfspace = Shelfspace.create!(shelfspace_params)
    render json: new_shelfspace, status: :created
  end

  # UPDATE /shelfspaces/:id
  def update
    shelfspace = find_shelfspace
    shelfspace.update!(shelfspace_params)
    render json: shelfspace
  end

  # DELETE /shelfspaces/:id
  def destroy
    shelfspace = find_shelfspace
    shelfspace.destroy
    render json: {}
  end

  private

  def shelfspace_params
    params.permit(:book_id, :shelf_id)
  end

  def find_shelfspace
    Shelfspace.find_by!(id: params[:id])
  end

  def render_invalid_response(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
