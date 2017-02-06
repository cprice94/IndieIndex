namespace IndieIndex.Services {
    export class GameService {
        public games = [];

        public dropdownData = {
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

        public getGames() {
            return this.games;
        }

        public save(game) {
            this.games.push(game);
        }
    }
    angular.module("IndieIndex").service("gameService", GameService);
}