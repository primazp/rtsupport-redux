function reducer(state, action) {
  if (!state) { state = {}; }
  switch(action.type) {
    default:
      if('ws' in action) {
        var clientAction = Object.assign({}, action, { meta: null, ws: null });
        console.log(clientAction)
        action.ws.send(JSON.stringify({
          name: 'action',
          data: clientAction
        }));
      }
      return state;
  }
}

module.exports = reducer;
