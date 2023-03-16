import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('job', params.job_id)
  }
});
