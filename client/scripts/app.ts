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
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
}