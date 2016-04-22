function empty(mixed_var) {
  var undef, key, i, len;
  var emptyValues = ['undefined', undef, null, false, 0, '', '0'];
  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixed_var === emptyValues[i]) {
      return true;
    }
  }
  if (typeof mixed_var === 'object') {
    for (key in mixed_var) {
      return false;
    }
    return true;
  }
  return false;
}	


	
var Lan_EN = {"100":"Authentication failed, please login again!","101":"Invalid email or password, try again!","102":"Email alredy exists in our database!","103":"Update failed, plesae try again!","104":"Referral email you entered is not correct!","105":"Your order quantity exceeds the seating capacity of the chef.","106":"Sorry, your desired timeslot is already reserved, only ___ seats available at that time!","107":"Sorry, your desired timeslot is already reserved!","108":"Unable to process your reservation, please try latter!","109":"This QR code has already been scanned!","110":"Can not proceed the request, because order status is ___","111":"Code does not relate to you!","112":"Reservation record not found!","113":"Can not proceed the request, because order status is '___'","114":"Chef has already reached his delivery limit during this timeslot","200":"","201":"Your schedule has been updated successfully","202":"Dish add\/update was successful","203":"Your reservation has been completed successfully","204":"Your reservation has been completed","205":"Order (___) Completed Successfully!","206":"Done, thanks for sharing review!","AboutFudi":"About Fudi","Active":"Active","AdEdDish":"Add\/Edit Dish","AddNew":"Add New","AddReservation":"Add Reservation","Address":"Address","ApplytoallfutureSundays":"Apply to all future","Availability":"Availability","AvailableDishes":"Available Dishes","BecomeaChef":"Become a Chef","CHEF":"CHEF","Cancel":"Cancel","ChefProfile":"Chef Profile","ChefRes":"Chef Reservations","ChefReservations":"Chef Reservations","Chefs":"Chefs","City":"City","Clickdates":"Click dates below to set timings and availability of dishes","CompanyName":"Company Name","ConfirmationCode":"Confirmation Code","CreateandRegister":"Create and Register","DelivaryCalCap":"Click dates below to set delivery timings","Delivery":"Delivery","DeliveryLimit":"Maximum deliveries per 2 hours","DeliveryOrder":"Delivery Order","DeliverySchedule":"Delivery Schedule","Deliverycharges":"Delivery charges ($)","Deliverycharges2":"Delivery charges","Deliveryradius":"Delivery radius (miles)","Detail":"Detail","Details":"Details","Dine":"Dine","Dish":"Dish","DishA0":"Not Available","DishA1":"Dine only","DishA2":"Delivery only","DishA3":"Dine + Delivery","DishName":"Dish Name","Dishes":"Dishes","Edcp":"Edit Chef Profile","Edit":"Edit","Email":"Email","EndTime":"End Time","Error":"Error","Excellent":"5\/5 Excellent","FSP":"Please fill your chef profile below to register as a chef; however your profile will be active once approved by our staff","Fair":"2\/5 Fair","FinishOrder":"Finish Order","FirstName":"First Name","FoodCost":"Food Cost","From":"From","Fudi":"Fudi","Good":"3\/5 Good","HERE":"HERE","Inactive":"Inactive","InvalidQR":"Invalid QR code for Fudi!","LangCode":"EN","Language":"Language","LastName":"Last Name","Loading":"Loading","Login":"Login","Logintoyouraccount":"Login to your account","Logout":"Logout","ManageD":"Manage Dishes","ManageDishes":"Manage Dishes","MarkUnavailable":"Mark Unavailable","MyOrders":"My Orders","MyProfile":"My Profile","MyReview":"My Review","Next":"Next","NoDishF":"No Dishes Found","NoGPS":"Could not get the current position. Either GPS signals are weak or GPS has been switched off","NoNotifications":"No Notifications Found","NoPic":"No Picture Found","NoReservationsFound":"No Reservations Found","NoReviewsFound":"No Reviews Found","Notifications":"Notifications","NumberofPersons":"Number of Persons","OK":"OK","OrderDetails":"Order Details","OrderId":"Order Id","OrderNow":"Order Now","Ordertotal":"Order total","Ordertype":"Order type","PGRC":"Please get the reservation code from guest and enter below to complte order and transfer payment","PSelectD":"Please select dish(es)","Paymentstatus":"Payment status","Paynow":"Pay Now","PaypalEmail":"Paypal Email","PaypalHlp":"Enter your corporate PayPal email address where you will receive FUDI payments.","PendingApproval":"Pending Approval","PeopleServed":"People Served","Persons":"Persons","Pfysp":"Please fill your chef profile below to register as a chef; however your profile will be active once approved by our staff.","Phone":"Phone","Pickadate":"Pick a date from available dates(green) below","Pleaselogin":"In order to place an order, you need to login or register to to the app. Please tap","Pleasepickdatetime":"Please pick date and time!","Pleaserateyour":"Please rate your level of satisfaction with the food and service you recieved.","Pleasetap":"In order to place an order, you need to complete your profile. Please tap","Poor":"1\/5 Poor","Price":"Price","ProfileUpdated":"Your profile has been updated successfuly","QRCode":"QR Code","Qty":"Qty","QuantitytoOrder":"Quantity to Order","REo":"Referral Email (Optional)","RKEY":"Reservation Key","RateYourExperience":"Rate Your Experience","Rateit":"Rate it","Register":"Register","Reservations":"Reservations","Retry":"Retry","Reviews":"Reviews","SEnV":"Start and end times are not valid, start time must be before the end time","Save":"Save","SaveSettings":"Save Settings","ScanQR":"Scan QR","Schedule":"Dine In Schedule","SearchChefs":"Search Chefs","SeatingCapacity":"Seating Capacity","SelectAll":"Select All","SelectDishes":"Select Dishes","SelectTime":"Select Time","SetAvFor":"Set Availability for","Settings":"Settings","Signup":"Sign up","SoA":"Schedule of Availability","StartTime":"Start Time","State":"State","Status":"Status","Submit":"Submit","Success":"Success","TOTAL":"TOTAL","Thischefnotavailable":"This chef is not available","Time":"Time","To":"To","Toponpic":"Tap on picture to change\/upload","ToponpicGal":"Tap on picture to select image from gallery","Toponpicup":"Tap on picture to change and upload\u00a0","Total":"Total","UPDATE":"UPDATE","UnableQR":"Unable to process QR code","Uploadfailed":"Upload failed","Uploading":"Uploading...","UserProfile":"User Profile","Version":"1","VeryGood":"4\/5 Very Good","WouldyouFacebook":"Would you also like to share your review on Facebook?","YesFacebook":"Yes, Share on Facebook","YourComments":"Your Comments","YourRating":"Your Rating","Zip":"Zip","deliveroutside":"Can deliver outside the above radios?","electdish":"Please select at least one dish!","in":"in","outof":"out of","tocompleteprofile":"to complete your profile!","tologinregister":"to login\/register!"};



/*
var X = '';
for (var key in Lan_EN) {
	//X += '$ArLan[\''+key+'\'] = \''+Lan_EN[key]+'\';\n';
	X += Lan_EN[key]+'\n';
	
}
console.log(X);
*/

var cLan = Lan_EN;

if( !empty(localStorage.getItem('LanguageData'))){
	cLan = JSON.parse(localStorage.getItem('LanguageData'));	
}

function AppViewModel() {
	this.lang = cLan;
}

ko.applyBindings(new AppViewModel());



var ServerAjax = 'http://mobileapi.foodiesys.com/foodie-mssql/ajax2.php';

var waitingDialog=waitingDialog||function(d){"use strict";var a=d('<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;"><div class="modal-dialog modal-m"><div class="modal-content"><div class="modal-header"><h3 style="margin:0;"></h3></div><div class="modal-body"><div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div></div></div></div></div>');return{show:function(i,o){"undefined"==typeof o&&(o={}),"undefined"==typeof i&&(i=cLan.Loading);var s=d.extend({dialogSize:"m",progressType:"",onHide:null},o);a.find(".modal-dialog").attr("class","modal-dialog").addClass("modal-"+s.dialogSize),a.find(".progress-bar").attr("class","progress-bar"),s.progressType&&a.find(".progress-bar").addClass("progress-bar-"+s.progressType),a.find("h3").text(i),"function"==typeof s.onHide&&a.off("hidden.bs.modal").on("hidden.bs.modal",function(){s.onHide.call(a)}),a.modal()},hide:function(){a.modal("hide")}}}(jQuery);

var BAlert = $('<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
	'<div class="modal-dialog modal-md"><div class="modal-content">' +
		'<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>' +
		'<h3 style="margin:0;"></h3></div>' +
		'<div class="modal-body"></div>' +
		'<div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">'+cLan.OK+'</button></div>'+
	'</div></div></div>');

Date.prototype.yyyymmdd = function() {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = this.getDate().toString();
	return yyyy +'-'+ (mm[1]?mm:"0"+mm[0]) +'-'+ (dd[1]?dd:"0"+dd[0]); // padding
};

var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];	

function ajaxError(  jqXHR, textStatus, errorThrown ){
	
	var M = '';
	if (jqXHR.status === 0) {
		M = 'Unable to connect to the server';
	} else if (jqXHR.status == 404) {
		M = 'Requested page not found. [404]';
	} else if (jqXHR.status == 500) {
		M = 'Internal Server Error [500].';
	} else if (textStatus === 'parsererror') {
		M = 'Requested JSON parse failed:<br />'+jqXHR.responseText;
	} else if (textStatus === 'timeout') {
		M = 'Request Time out.';
	} else if (textStatus === 'abort') {
		M = 'Ajax request aborted.';
	} else {
		M = 'Uncaught Error ' + jqXHR.textStatus;
	}

	BAlert.find('.modal-header h3').html('<i class="fa fa-exclamation-triangle"></i> '+cLan.Error);
	BAlert.find('.modal-body').html('<p class="text-danger">'+M+'</p>');
	BAlert.modal();	
	
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function ratingCal(ratSum, ratCount){
	var r = 0;
	var r2 = '0.0'; 
	if( ratCount > 0 ){
		r = ratSum / ratCount;
		r2 = r.toFixed(1); 
		r = (Math.round(r * 2) / 2).toFixed(1);
	}
	var ret = {  
   	starImg : 'images/'+r+'.gif',
		ratingTxt : '('+r2+'/5)'
	}
   return(ret);
}



if(!empty(document.getElementById('navRight'))){
	if( empty(localStorage.getItem('userId'))){
		var loc = window.location.href;
		if( loc.indexOf('map.html') == -1 && loc.indexOf('chef_profile.html') == -1 ){ // not map page
			document.location = 'register.html';
		}else{
			$("#menu-toggle").hide();
		}
	}
}  

function showNotifications(){
	if(!empty(localStorage.getItem('Notifications'))){
		if(localStorage.getItem('Notifications')>0){
			$('#anoti .badge').remove();
			$('#anoti').append('<span class="badge">'+localStorage.getItem('Notifications')+'</span>');
		}
	}
}


function initMenu(){
	$('#navRight li.isChef').prop('style','');
	if(empty(localStorage.getItem('chefStatus')) || localStorage.getItem('chefStatus') == 0 ){
		$('#navRight li.noChef').show();
	}else if( localStorage.getItem('chefStatus') == 1 ){
		$('#navRight li.pChef').show();
	}else if( localStorage.getItem('chefStatus') == 2 ){ 
		$('#navRight li.isChef').show();
	}
}

function ErrorModalWithParm(data){
	var TE = data.Msg;
	//console.log(data);
	if(!empty(data.MsgLKey) && !empty(cLan[data.MsgLKey]) ){
		TE = cLan[data.MsgLKey];
		if(TE.indexOf('___')!= -1){
			TE = TE.replace('___', data.P1);	
		}	
	}	
	BAlert.find('.modal-header h3').html('<i class="fa fa-exclamation-triangle"></i> '+cLan.Error);
	BAlert.find('.modal-body').html('<p class="text-danger">'+TE+'</p>');
	BAlert.modal();	
}

function SuccessModalWithParm(data){
	var TE = data.Msg;
	if(!empty(data.MsgLKey) && !empty(cLan[data.MsgLKey]) ){
		TE = cLan[data.MsgLKey];
		if(TE.indexOf('___')!= -1){
			TE = TE.replace('___', data.P1);	
		}	
	}	
	BAlert.find('.modal-header h3').html('<i class="fa check"></i>'+cLan.Success);
	BAlert.find('.modal-body').html('<p class="text-success">'+TE+'</p>');
	BAlert.modal();	
}



$(document).ready(function(e) {
	initMenu();
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		
			$("#wrapper").toggleClass("active");
			$(".fa").toggleClass('fa-bars fa-remove');
			$(this).toggleClass('toggle-button');		
	});	
    
 // Switch Click
	$('.Switch').click(function() {
		// Check If Enabled (Has 'On' Class)
		if ($(this).hasClass('On')){
			
			// Try To Find Checkbox Within Parent Div, And Check It
			$(this).parent().find('input:checkbox').attr('checked', true);
			$(this).css('background','#4ba61d');
			// Change Button Style - Remove On Class, Add Off Class
			$(this).removeClass('On').addClass('Off');
			
		} else { // If Button Is Disabled (Has 'Off' Class)
		
			// Try To Find Checkbox Within Parent Div, And Uncheck It
			$(this).parent().find('input:checkbox').attr('checked', false);
			$(this).css('background','#F9F9F9');
			
			// Change Button Style - Remove Off Class, Add On Class
			$(this).removeClass('Off').addClass('On');
		}
	});
		
	// Loops Through Each Toggle Switch On Page
	$('.Switch').each(function() {
		if ($(this).prev('input:checkbox').length){
			if (!$(this).prev('input:checkbox').hasClass("show")){ $(this).prev('input:checkbox').hide(); }
			if ($(this).prev('input:checkbox').is(':checked')){
				$(this).removeClass('On').addClass('Off');
			} else { 
				$(this).removeClass('Off').addClass('On');
			}
		}
	});
	
	showNotifications();
		
});

