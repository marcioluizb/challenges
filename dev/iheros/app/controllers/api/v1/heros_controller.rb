module Api::V1 
	class HerosController < Api::V1::ApiController
		
		before_action :authorized

		before_action :set_hero, only: [:show, :update, :destroy]

	  def index
	    @heros = Hero.all
	    render json: @heros
	  end

	  def show
	    render json: @hero
	  end

	  def create
	    @hero = Hero.new(hero_params)

	    if @hero.save
	      render json: @hero, status: :created
	    else
	      render json: @hero.errors, status: :unprocessable_entity
	    end
	  end

	  def update
	    if @hero.update(hero_params)
	      render json: @hero
	    else
	      render json: @hero.errors, status: :unprocessable_entity
	    end
	  end

	  # DELETE /heros/1
	  def destroy
	    @hero.destroy
	  end

	  def get_hero_by_class
	    @hero = Hero.find_by('hero_class = ?', params['class'])
	    render json: @hero
	  end

  	private
	    def set_hero
	      @hero = Hero.find(params[:id])
	    end

	    def hero_params
	      params.require(:hero).permit(:name, :hero_class, :lat, :lng, :active)
	    end
	end
end
