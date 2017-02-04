namespace IndieIndex.Controllers{
    export class IndexController{
        public message = "IndexController";

        public showModal(){
            this.$uibModal.open({
                templateUrl: "client/views/modals/loginModal.html",
                controller: LoginModalController,
                controllerAs: "vm",
                size: "sm"
            });
        }

        constructor(private $uibModal: ng.ui.bootstrap.IModalService){

        }
    }
    angular.module("IndieIndex").controller("IndexController", IndexController);
}