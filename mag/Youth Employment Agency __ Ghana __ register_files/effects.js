/*--------------------------------------------------------------
# Copyright (C) joomla-monster.com
# License: http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
# Website: http://www.joomla-monster.com
# Support: info@joomla-monster.com
---------------------------------------------------------------*/

//effects
function addEffect() {
	
	var moduleTarget = jQuery.find(".animate .jm-category-module");
  if (!moduleTarget.length) return;
	
	jQuery(moduleTarget).each(function(i,e) {
		var elTarget = jQuery(e).find("li");
		var ojectPosition = jQuery(e).offset().top;
		var scrollWindow = jQuery(window).scrollTop();
		var screenHeight = jQuery(window).height();
		if (ojectPosition < (scrollWindow + screenHeight)) {
			elTarget.addClass("jm-slideIn");
		}
	});
	
};

jQuery(window).load(function() {
  addEffect();
});

jQuery(window).scroll(function() {
	addEffect();
});