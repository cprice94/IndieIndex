namespace IndieIndex.Controllers{
    export class BrowseController{
        public games;
        public dropdownData;

        constructor(private gameService: IndieIndex.Services.GameService){
            this.games = gameService.getGames();
            this.dropdownData = gameService.dropdownData;
        }
    }
    angular.module("IndieIndex").controller("BrowseController", BrowseController);
}