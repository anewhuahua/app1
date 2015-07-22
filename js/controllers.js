angular.module('starter.controllers', [])

.controller('mainIndexCtrl', function($scope) {})

.controller('mainProductsCtrl', function($scope,$state) {
  $state.go("product.detail");
})
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
/*
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
*/


.controller('mainToolBoxCtrl', function($scope) {})

.controller('musicCtrl', function($scope) {})     

.controller('productDetailCtrl', function($scope,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
});

  /*
  $scope.detail = {
      id: '1201',
      name: '盈泰磐海对接新泽量化',
      detail: '作为国内首只港股分级基金，添富恒生进一步拓宽了内地与香港市场的通道，有助于内地投资者更加高效地进行海外资产配置。据了解，添富恒生所跟踪的恒生指数香港市场的核心指数，反映优质的香港龙头上市公司表现。恒生指数成分股中有近60%的权重来自汇丰控股、长江实业、新鸿基地产、香港交易所等本地的龙头企业，还有35%左右的权重来自腾讯控股等优质中国企业。其中，成分股中包含的博彩、交易所等商业模式恰是内地稀缺的新经济的代表。1月26日消息，据香港文汇报报道，内地与香港两地基金互认随时推出，投资港股的基金公司有望抢占先机。据路透报导，汇添富基金管理公司昨开始正式销售内地首只QDII版的港股杠杆基金-汇添富恒生指数(25275.641, 192.89, 0.77%)分级证券基金，为内地股民提供多一种恒生指数的投资方式。'
    };
});*/

