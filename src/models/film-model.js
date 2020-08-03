class FilmModel {
  constructor(data) {
    this.id = parseInt(data[`id`], 10);
    this.title = data[`name`];
    this.genre = data[`genre`];
    this.year = parseInt(data[`released`], 10);
    this.imageSrc = data[`preview_image`];
    this.preview = data[`preview_video_link`];
    this.fullVideo = data[`video_link`];

    this.poster = data[`poster_image`];
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

  static parseFilm(data) {
    return new FilmModel(data);
  }

  static parseFilms(data) {
    return data.map(FilmModel.parseFilm);
  }
}

export {FilmModel};
