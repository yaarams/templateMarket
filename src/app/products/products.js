(function() {
    'use strict';

    angular
        .module('holyShop.products')
        .controller('ProductsCtrl', ProductController);

    ProductController.$inejct = ['cartStore', 'productsService'];

    function ProductController(cartStore, productsService) {
        var scope = this;

        angular.extend(scope, {
            books: [],
            store: cartStore
        });

        productsService.getData()
            .then(function success(httpResult) {
                scope.books = [{
                    cover: "http://static.wixstatic.com/media/cc6862f4b1d8490d86a07ac2c0485003.jpg",
                    isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
                    price: 35,
                    title: "IP Law Firm"
                },{
                    cover: "http://static.wixstatic.com/media/e6171a0ff28649d69da9a7e86e2d30d9.jpg",
                    isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
                    price: 25,
                    title: "Art Director Portfolio"
                }];
                    //httpResult.data;
            });
    }

})();

