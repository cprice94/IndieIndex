namespace IndieIndex.Controllers{
    export class LoginModalController{
        public user;

        public exit(){
            this.$uibModalInstance.close();
        }

        public submit(){
            console.log(this.user);
            this.exit();
        }

        constructor(private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance){

        }
    }
    angular.module("IndieIndex").controller("LoginModalController", LoginModalController);
}