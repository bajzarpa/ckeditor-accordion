# CKEDTIOR Accordion
## Simple accordion plugin for CKEDITOR

This plugins creates only the logic of the plugin; you have to apply the styling for your self,
trust me, it's not a rocket science... 

### Usage
Copy the accordion folder into your CKEDTIOR plugins folder then activate in the config file

    config.extraPlugins = 'accordion';

### Javascript
You must insert the following code into your javascript, to handle the open-close methods

    $(document).on('click', '.collapse-panel h6', function() {
      $(this).parent().toggleClass('active');
      return false;
    });

### Settings for the CSS
This plug in is css driven mostly, so you need to apply a basic setup for the accordion

    .collapse-panel {
      display: block;
      width: 100%;
    }

    .collapse-panel h6 {
      width: 100%;
      cursor: pointer;
    }

    .collapse-panel h6 a {
      display: block;
    }

    .collapse-panel .panel-content {
      max-height: 0;
      overflow: hidden;
      transition: all .2s ease;
    }

    .collapse-panel.active .panel-content {
      max-height: 1000px;
    }

### Notes
- I created a CKEDITOR project for very first time, so i know, it can be better. :-)
- The plugin also has an option for dark scheme, if you can choose that, the root element will got a "dark" class, then you can apply your css to that.
