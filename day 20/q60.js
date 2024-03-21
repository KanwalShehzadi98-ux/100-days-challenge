"use strict";
let userProfile = (function () {
    let name = "Kanwal";
    let age = 20;
    return {
        displayInfo: function () {
            console.log(`Name : ${name} \n Age : ${age}`);
        },
    };
})();
userProfile.displayInfo();
