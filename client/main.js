Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Meteor.subscribe('onlineUsers');

Meteor.startup(function() {
});
