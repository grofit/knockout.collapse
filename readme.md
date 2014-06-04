# Knockout.Collapse

A simple binding to allow you to easily add collapsing behaviour to your project, 
clicking the bound element will show and hide or altering the isCollapsed property will do the same.

## Example

A simple example of setting up a collapsible area:
```
<a data-bind="collapse: { content: '#collapsible-content' }">Collapsible Header</a>
<div id="collapsible-content">Some Content</div>
```

The binding should ALWAYS have a content argument which is the jquery selector for the content element to be toggled when clicked.

The available options for this binding are:

* **content** - The jquery selector for the content element
* **isCollapsed** - An observable to be used for showing and hiding
* **options** - The options container
 * **expandedClass** - The class to apply to the trigger element when the area is expanded
 * **collapsedClass** - The class to apply to the trigger element when the area is collapsed
 
There is finally a helper method to help you manually collapse and expand sections if needed, although it should be avoided if possible.

```
ko.collapse.expand("#the-content-selector-here");
ko.collapse.collapse("#the-content-selector-here");
```
 
Here is an example of what it does and how to use it.
[View Example](https://rawgithub.com/grofit/knockout.collapse/master/example.html)