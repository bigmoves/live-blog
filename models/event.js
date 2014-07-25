module.exports = Event;

function Event(opts) {
  opts = opts || {};
  this.name = opts.name || '';
  this.about = opts.about || '';
  this.when = opts.when || '';
  this.where = opts.where || '';
  this.status = 'This event is updating live...';
  this.createdAt = new Date();
}