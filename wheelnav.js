if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function() {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function() {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });


    Template.hello.rendered = function() {
        wheel = new wheelnav('wheelDiv');
        wheel.spreaderEnable = true;
        wheel.clickModeSpreadOff = true;
        wheel.createWheel(["Welcome", "to my","first","Meteor","package" , icon.smile]);
        wheel.navigateWheel(1);
    }

}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
