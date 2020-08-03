class ReviewModel {
  constructor(data) {
    this.id = data[`id`];
    this.user = {
      id: data[`user`][`id`],
      name: data[`user`][`name`],
    };
    this.rating = data[`rating`];
    this.comment = data[`comment`];
    this.date = new Date(data[`date`]);
  }

  static toRAW(rating, comment) {
    return {
      'rating': rating,
      'comment': comment
    };
  }

  static parseReview(data) {
    return new ReviewModel(data);
  }

  static parseReviews(data) {
    return data.map(ReviewModel.parseReview);
  }
}

export {ReviewModel};
