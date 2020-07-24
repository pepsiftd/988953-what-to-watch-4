class FilmModel {
  constructor(data) {
    this.id = parseInt(data[`id`], 10);
    this.title = data[`name`];
    this.genre = data[`genre`];
    this.year = parseInt(data[`released`], 10);
    this.imageSrc = data[`preview_image`];
    this.movieLink = `movie-page.html`;
    this.preview = data[`preview_video_link`];
    this.fullVideo = data[`video_link`];

    this.poster = data[`poster`];
    this.backgroundImage = data[`background_image`];
    this.backgroundColor = data[`background_color`];
    this.description = data[`description`];
    this.rating = parseFloat(data[`rating`]);
    this.scoresCount = parseInt(data[`scores_count`], 10);
    this.director = data[`director`];
    this.starring = data[`starring`];
    this.runTime = parseInt(data[`run_time`], 10);
    this.isFavorite = Boolean(data[`is_favorite`]);
  }

  toRAW() {
    return {
      "id": this.id,
      "name": this.title,
      "poster_image": this.poster,
      "preview_image": this.imageSrc,
      "background_image": this.backgroundImage,
      "background_color": this.backgroundColor,
      "video_link": this.fullVideo,
      "preview_video_link": this.preview,
      "description": this.description,
      "rating": this.rating,
      "scores_count": this.scoresCount,
      "director": this.director,
      "starring": this.starring,
      "run_time": this.runTime,
      "genre": this.genre,
      "released": this.year,
      "is_favorite": this.isFavorite,
    };
  }

  static parseFilm(data) {
    return new FilmModel(data);
  }

  static parseFilms(data) {
    return data.map(FilmModel.parseFilm);
  }
}

export {FilmModel};
