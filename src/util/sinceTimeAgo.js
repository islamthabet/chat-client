import moment from 'moment';

export const sinceTimeAgo = (seenFrom) => {
  if (moment().diff(seenFrom, 'weeks') > 4) {
    return `${moment().diff(seenFrom, 'months')} month`;
  } else if (moment().diff(seenFrom, 'days') > 7) {
    return `${moment().diff(seenFrom, 'weeks')} week`;
  } else if (moment().diff(seenFrom, 'hours') > 24) {
    return `${moment().diff(seenFrom, 'days')} day`;
  } else if (moment().diff(seenFrom, 'minutes') > 60) {
    return `${moment().diff(seenFrom, 'hours')} hour`;
  } else if (moment().diff(seenFrom, 'seconds') > 60) {
    return `${moment().diff(seenFrom, 'minutes')} minute`;
  } else {
    return `${moment().diff(seenFrom, 'seconds')} second`;
  }
};
