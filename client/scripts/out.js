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
        })
            .state("AddGame", {
            url: "/addGame",
            templateUrl: "client/views/addGame.html",
            controller: IndieIndex.Controllers.AddGameController,
            controllerAs: "vm"
        })
            .state("EditGame", {
            url: "/editGame",
            templateUrl: "client/views/EditGame.html",
            controller: IndieIndex.Controllers.EditGameController,
            controllerAs: "vm"
        })
            .state("Profile", {
            url: "/profile/:id",
            templateUrl: "client/views/profile.html",
            controller: IndieIndex.Controllers.ProfileController,
            controllerAs: "vm"
        })
            .state("Details", {
            url: "/details/:id",
            templateUrl: "client/views/details.html",
            controller: IndieIndex.Controllers.DetailsController,
            controllerAs: "vm"
        })
            .state("YourGames", {
            url: "/yourGames",
            templateUrl: "client/views/yourGames.html",
            controller: IndieIndex.Controllers.YourGamesController,
            controllerAs: "vm"
        })
            .state("NotFound", {
            url: "/notFound",
            templateUrl: "client/views/notFound.html",
        });
        $urlRouterProvider.otherwise("/notFound");
        $locationProvider.html5Mode(true);
    });
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var AddGameController = (function () {
            function AddGameController(gameService) {
                this.gameService = gameService;
                this.dropdownData = gameService.dropdownData;
            }
            AddGameController.prototype.save = function () {
                console.log(this.game);
                this.gameService.save(this.game);
            };
            return AddGameController;
        }());
        Controllers.AddGameController = AddGameController;
        angular.module("IndieIndex").controller("AddGameController", AddGameController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var BrowseController = (function () {
            function BrowseController(gameService) {
                this.gameService = gameService;
                this.games = gameService.getGames();
                this.dropdownData = gameService.dropdownData;
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
        var DetailsController = (function () {
            function DetailsController() {
            }
            return DetailsController;
        }());
        Controllers.DetailsController = DetailsController;
        angular.module("IndieIndex").controller("DetailsController", DetailsController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var EditGameController = (function () {
            function EditGameController() {
            }
            return EditGameController;
        }());
        Controllers.EditGameController = EditGameController;
        angular.module("IndieIndex").controller("EditGameController", EditGameController);
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
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var ProfileController = (function () {
            function ProfileController() {
            }
            return ProfileController;
        }());
        Controllers.ProfileController = ProfileController;
        angular.module("IndieIndex").controller("ProfileController", ProfileController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Controllers;
    (function (Controllers) {
        var YourGamesController = (function () {
            function YourGamesController() {
            }
            return YourGamesController;
        }());
        Controllers.YourGamesController = YourGamesController;
        angular.module("IndieIndex").controller("YourGamesController", YourGamesController);
    })(Controllers = IndieIndex.Controllers || (IndieIndex.Controllers = {}));
})(IndieIndex || (IndieIndex = {}));
var IndieIndex;
(function (IndieIndex) {
    var Services;
    (function (Services) {
        var GameService = (function () {
            function GameService() {
                this.games = [];
                this.dropdownData = {
                    gameTypes: [
                        "Action",
                        "Action-Adventure",
                        "Adventure",
                        "Role-Playing",
                        "Simulation",
                        "Strategy",
                        "Sports",
                        "MMO",
                        "Casual",
                        "Music",
                        "Party",
                        "Programming",
                        "Logic",
                        "Trivia",
                        "Board",
                        "Card"
                    ],
                    releaseStage: [
                        "In Development",
                        "Open Alpha",
                        "Closed Alpha",
                        "Open Beta",
                        "Closed Beta",
                        "Full Release"
                    ],
                    priceStructure: [
                        "Free to play",
                        "Pay to Play",
                        "Buy to Play"
                    ]
                };
            }
            GameService.prototype.getGames = function () {
                return this.games;
            };
            GameService.prototype.save = function (game) {
                this.games.push(game);
            };
            return GameService;
        }());
        Services.GameService = GameService;
        angular.module("IndieIndex").service("gameService", GameService);
    })(Services = IndieIndex.Services || (IndieIndex.Services = {}));
})(IndieIndex || (IndieIndex = {}));
