import {request} from './data-request';

/*
 * Article List handler
 *
 * Gets teaser-style list of all articles
 * Stored at context.thumbs
 *
 */

export function handler(context) {
  // get the article listing
  return request(context.db_server + '/db/thumbs')
  .then(function(listing) {
    context.thumbs = listing;
  });
}