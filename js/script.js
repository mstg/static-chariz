/* 
* @Author: mustafa
* @Date:   2015-06-19 00:23:09
* @Last Modified by:   mustafa
* @Last Modified time: 2015-06-19 14:25:14
*/

'use strict';
$(document).ready(function() {
	var starting_margin = $("main div.items").css("marginLeft");
	$(".featuring a").click(function() {
		$(".featuring a").removeClass("selected");
		$("main div.items").animate({'marginLeft': starting_margin, opacity: 1}, "fast");
		$(this).addClass("selected");
		$("main div.items").animate({'marginLeft' : (starting_margin.replace("px", "")+600) + "px", opacity: 0}, 1000, function() {
			$("main div.items").animate({'marginLeft' : starting_margin.replace("px", "") + "px", opacity: 1}, 1000);
		});
	});
});