class TimeUtils {
  constructor(createdAt) {
    this.now = new Date();
    this.createdAt = new Date(createdAt);
    this.timeDifferenceInMinutes = Math.floor(
        (this.now - this.createdAt) / (1000 * 60));
    this.timeDifferenceInHours = Math.floor(this.timeDifferenceInMinutes / 60);
    this.timeDifferenceInDays = Math.floor(this.timeDifferenceInHours / 24);
    this.timeDifferenceInMonths = Math.floor(this.timeDifferenceInDays / 30);
    this.timeDifferenceInYears = Math.floor(this.timeDifferenceInMonths / 12);
  }

  getFormattedTime() {
    const pluralize = (count, unit) => `${count} ${unit}${count !== 1 ? 's'
        : ''}`;

    if (this.timeDifferenceInMinutes < 2) {
      return "just now";
    }
    if (this.timeDifferenceInMinutes < 60) {
      return pluralize(this.timeDifferenceInMinutes, 'minute') + " ago";
    }
    if (this.timeDifferenceInHours < 24) {
      return pluralize(this.timeDifferenceInHours, 'hour') + " ago";
    }
    if (this.timeDifferenceInDays < 30) {
      return pluralize(this.timeDifferenceInDays, 'day') + " ago";
    }
    if (this.timeDifferenceInMonths < 12) {
      return pluralize(this.timeDifferenceInMonths, 'month') + " ago";
    }
    return pluralize(this.timeDifferenceInYears, 'year') + " ago";

  }
}

export {TimeUtils};
