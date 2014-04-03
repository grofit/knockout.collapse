(function(knockout){

	knockout.collapse = {};

	knockout.collapse.expand = function(containerSelector) {
		$(containerSelector).slideDown();
	};
	
	knockout.collapse.collapse = function(containerSelector) {
		$(containerSelector).slideUp();
	};
	
	knockout.bindingHandlers.collapse = {
		init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
			var allBindings = allBindingsAccessor();
			var collapseBindings = allBindings.collapse;
			
			var contentSelector = knockout.unwrap(collapseBindings.content);
			var isCollapsed = collapseBindings.isCollapsed;
			var options = knockout.unwrap(collapseBindings.options) || {};
						
			if(!contentSelector)
			{
				console.log("Unable to setup collapse due to no content being set");
				return;
			}
			
			if(!isCollapsed) { isCollapsed = ko.observable(false); }
			if(!knockout.isObservable(isCollapsed)) { isCollapsed = ko.observable(isCollapsed); }
						
			isCollapsed.subscribe(function(value) {
				if(value) { knockout.collapse.expand(contentSelector); }
				else { knockout.collapse.collapse(contentSelector); }
			});
			
			$(element).click(function() {
				isCollapsed(!isCollapsed());
			});
		}
	};

})(typeof exports === 'undefined' ? this["ko"] : require("knockout"));