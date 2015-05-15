if (Meteor.isClient) {

    Template.hello.rendered = function() {
        wheel = new wheelnav('wheelDiv');
        wheel.spreaderEnable = true;
        wheel.clickModeSpreadOff = true;
        wheel.clockwise = true;
        wheel.createWheel(["Welcome", "to my","first","Meteor","package" , icon.smile]);
    }

}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
