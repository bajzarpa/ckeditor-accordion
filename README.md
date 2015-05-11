# CKEDTIOR Accordion
## Simple accordion plugin for CKEDITOR

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
