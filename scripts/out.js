var IndieIndex;
(function (IndieIndex) {
    angular.module("IndieIndex", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state("Home", {
            url: "/",
            templateUrl: "client/views/home.html",
            controller: IndieIndex.Controllers.HomeController,
            controllerAs: "vm"
        });
    });
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = "HomeController";
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module("IndieIndex").controller("HomeController", HomeController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var IndexController = (function () {
            function IndexController() {
                this.message = "IndexController";
            }
            return IndexController;
        }());
        Controllers.IndexController = IndexController;
        angular.module("IndieIndex").controller("IndexController", IndexController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
})(IndieIndex || (IndieIndex = {}));
