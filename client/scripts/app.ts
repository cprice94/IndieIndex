namespace IndieIndex {
    angular.module("IndieIndex",["ui.router"]).config((
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
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
}