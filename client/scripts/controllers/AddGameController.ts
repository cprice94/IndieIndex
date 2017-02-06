namespace IndieIndex.Controllers{
    export class AddGameController{
        public game;
        public dropdownData;

        public save(){
            console.log(this.game);
            this.gameService.save(this.game);
        }

        constructor(private gameService: IndieIndex.Services.GameService){
            this.dropdownData = gameService.dropdownData;
        }
    }
    angular.module("IndieIndex").controller("AddGameController",AddGameController);
}