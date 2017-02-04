var IndieIndex;
(function (IndieIndex) {
    angular.module("IndieIndex", ["ui.router", "ui.bootstrap"]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state("Home", {
            url: "/",
            templateUrl: "client/views/home.html",
            controller: IndieIndex.Controllers.HomeController,
            controllerAs: "vm"
        })
            .state("Browse", {
            url: "/browse/:id",
            templateUrl: "client/views/browse.html",
            controller: IndieIndex.Controllers.BrowseController,
            controllerAs: "vm"
        })
            .state("NewUser", {
            url: "/newUser",
            templateUrl: "client/views/newUser.html",
            controller: IndieIndex.Controllers.NewUserController,
            controllerAs: "vm"
        });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var BrowseController = (function () {
            function BrowseController() {
                this.message = "BrowseController";
            }
            return BrowseController;
        }());
        Controllers.BrowseController = BrowseController;
        angular.module("IndieIndex").controller("BrowseController", BrowseController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
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
            function IndexController($uibModal) {
                this.$uibModal = $uibModal;
                this.message = "IndexController";
            }
            IndexController.prototype.showModal = function () {
                this.$uibModal.open({
                    templateUrl: "client/views/modals/loginModal.html",
                    controller: Controllers.LoginModalController,
                    controllerAs: "vm",
                    size: "sm"
                });
            };
            return IndexController;
        }());
        Controllers.IndexController = IndexController;
        angular.module("IndieIndex").controller("IndexController", IndexController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var LoginModalController = (function () {
            function LoginModalController($uibModalInstance) {
                this.$uibModalInstance = $uibModalInstance;
            }
            LoginModalController.prototype.exit = function () {
                this.$uibModalInstance.close();
            };
            LoginModalController.prototype.submit = function () {
                console.log(this.user);
                this.exit();
            };
            return LoginModalController;
        }());
        Controllers.LoginModalController = LoginModalController;
        angular.module("IndieIndex").controller("LoginModalController", LoginModalController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var NewUserController = (function () {
            function NewUserController() {
            }
            return NewUserController;
        }());
        Controllers.NewUserController = NewUserController;
        angular.module("IndieIndex").controller("NewUserController", NewUserController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
})(IndieIndex || (IndieIndex = {}));
