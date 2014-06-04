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

            var checkValueChange = function(isCollapsed) {
                if(isCollapsed) {
                    knockout.collapse.collapse(contentSelector);
                }
                else {
                    knockout.collapse.expand(contentSelector);
                }
            };

            isCollapsed.subscribe(checkValueChange);

            var checkStyleChange = function(isCollapsed) {
                if(isCollapsed) {
                    $(element).removeClass(options.expandedClass);
                    $(element).addClass(options.collapsedClass)
                }
                else {
                    $(element).addClass(options.expandedClass);
                    $(element).removeClass(options.collapsedClass);
                }
            };

            if(options.expandedClass || options.collapsedClass)
            { isCollapsed.subscribe(checkStyleChange); }

			$(element).click(function() {
				isCollapsed(!isCollapsed());
			});

            isCollapsed.valueHasMutated();
		}
	};

})(typeof exports === 'undefined' ? this["ko"] : require("knockout"));