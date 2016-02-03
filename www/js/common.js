var waitingDialog=waitingDialog||function(d){"use strict";var a=d('<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;"><div class="modal-dialog modal-m"><div class="modal-content"><div class="modal-header"><h3 style="margin:0;"></h3></div><div class="modal-body"><div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div></div></div></div></div>');return{show:function(i,o){"undefined"==typeof o&&(o={}),"undefined"==typeof i&&(i="Loading");var s=d.extend({dialogSize:"m",progressType:"",onHide:null},o);a.find(".modal-dialog").attr("class","modal-dialog").addClass("modal-"+s.dialogSize),a.find(".progress-bar").attr("class","progress-bar"),s.progressType&&a.find(".progress-bar").addClass("progress-bar-"+s.progressType),a.find("h3").text(i),"function"==typeof s.onHide&&a.off("hidden.bs.modal").on("hidden.bs.modal",function(){s.onHide.call(a)}),a.modal()},hide:function(){a.modal("hide")}}}(jQuery);

var BAlert = $(
	'<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
	'<div class="modal-dialog modal-md"><div class="modal-content">' +
		'<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
		'<h3 style="margin:0;"></h3></div>' +
		'<div class="modal-body"></div>' +
		'<div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">OK</button></div>'+
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

	BAlert.find('.modal-header h3').html('<i class="fa fa-exclamation-triangle"></i> Error');
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

if(!empty(document.getElementById('navRight'))){
	if( empty(localStorage.getItem('userId'))){
		document.location = 'register.html';	
	}
}  


function initMenu(){
	$('#navRight li.DYN').remove();
	if(empty(localStorage.getItem('chefStatus')) || localStorage.getItem('chefStatus') == 0 ){
		$('#navRight').append('<li class="menu-heading DYN"><strong><a href="#">CHEF</a></strong></li>'); 
		$('#navRight').append('<li class="DYN"><a class="sub" href="chef-profile-edit.html">Become a Chef</a></li>');
	}else if( localStorage.getItem('chefStatus') == 1 ){
		$('#navRight').append('<li class="menu-heading DYN"><strong><a href="#">CHEF</a></strong></li>'); 
		$('#navRight').append('<li class="DYN"><a class="sub" href="chef-profile-edit.html">Chef Profile</a></li>');
	}else if( localStorage.getItem('chefStatus') == 2 ){ 
		$('#navRight').append('<li class="menu-heading DYN"><strong><a href="#">CHEF</a></strong></li>'); 
		$('#navRight').append('<li class="DYN"><a class="sub" href="chef-profile-edit.html">Chef Profile</a></li>');
		$('#navRight').append('<li class="DYN"><a class="sub" href="chef-dishes.html">Manage Dishes</a></li>');
		$('#navRight').append('<li class="DYN"><a class="sub" href="chef-calendar-set.html">Schedule</a></li>');
		$('#navRight').append('<li class="DYN"><a class="sub" href="chef-reservations.html">Chef Reservations</a></li>');
	}
	$('#navRight').append('<li class="DYN"><a href="about.html">About Foodie</a></li>');
	$('#navRight').append('<li class="DYN"><a href="register.html?do=logout">Logout</a></li>');
}

$(document).ready(function(e) {
	initMenu();
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("active");
		$(".fa").toggleClass('fa-bars fa-remove');
		$(this).toggleClass('toggle-button');
	});
});
