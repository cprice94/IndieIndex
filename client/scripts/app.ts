namespace IndieIndex {
    angular.module("IndieIndex",["ui.router", "ui.bootstrap"]).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
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
        })
        $urlRouterProvider.otherwise("/notFound");
        $locationProvider.html5Mode(true);
    });
}