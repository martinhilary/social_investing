class ArticlesController < ApplicationController
def index
  end
  def edit
  end
  def show
  end
def create
  render plain: params[:article].inspect
end
def stocks
end
def infographics
end

def quotes
end

def financials
end

end
