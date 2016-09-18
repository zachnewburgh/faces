module Api
  module V1 
    class VideosController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      
      def index 
        respond_with(Video.all.order("id DESC"))
      end 
      
      def show 
        respond_with(Video.find(params[:id]))
      end 
      
      def create 
        @video = Video.new(video_params) 
        if @video.save 
          respond_to do |format|
            format.json { render json: @video }
          end 
        end 
      end 
      
      def update 
        @video = Video.find(params[:id])
        if @video.update(video_params) 
          respond_to do |format| 
            format.json { render json: @video }
          end 
        end 
      end 
 
      def destroy 
        respond_with Video.destroy(params[:id]) 
      end 
      
      private
      
      def video_params 
        params.require(:video).permit(:url) 
      end 
      
    end 
  end
end