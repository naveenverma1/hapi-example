
module.exports = {
	sum:function(request,reply){
		 
             var sum = parseInt(request.payload.a) + parseInt(request.payload.b);
             reply(sum);
        
	},
    
    diff:function(request,reply){
		 
        var diff = parseInt(request.payload.a) - parseInt(request.payload.b);
                reply(diff);
   
},prod:function(request,reply){
		 
    var prod = parseInt(request.payload.a) * parseInt(request.payload.b);
    reply(prod);

},div:function(request,reply){
		 
    var div = parseInt(request.payload.a) / parseInt(request.payload.b);
    reply(div);

},rem:function(request,reply){
		 
    var rem = parseInt(request.payload.a) % parseInt(request.payload.b);
    reply(rem);
},
}