PhysicsSystem = pc.systems.Physics.extend('PhysicsSystem', {}, {
      init: function(options) {
        this._super(options);
    },

    onCollision: function(aType, bType, entityA, entityB, force, fixtureAType, fixtureBType, contact) {},

    onCollisionStart: function(aType, bType, entityA, entityB, fixtureAType, fixtureBType, contact) {
      // @todo FUN STUFF HERE
    },

    onCollisionEnd: function(aType, bType, entityA, entityB, fixtureAType, fixtureBType, contact) {}
});
