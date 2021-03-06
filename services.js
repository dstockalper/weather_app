// SERVICES
weatherApp.service('cityService', function() {
    
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.getWeather = function(city, days) {
        
        var weatherAPPID = '33264d6c264a8731fcae9ed93b25d87c';
        
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
    
        return weatherResult = weatherAPI.get({ q: city, cnt: days, appid: weatherAPPID });
        
    }
    
    
        

}]);