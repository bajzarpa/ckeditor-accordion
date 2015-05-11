CKEDITOR.dialog.add('accordion', function(editor) {
  return {
    title: 'Insert accordion',
    minWidth: 200,
    minHeight: 100,
    contents: [
      {
        id: "accordion-setting",
        label: "Default settings",
        elements: [
          {
            type: "text",
            id: "number",
            label: "Count",
            validate: CKEDITOR.dialog.validate.notEmpty("This field cannot be empty")
          }, {
            type: "checkbox",
            id: "dark",
            label: "Dark edition"
          }
        ]
      }
    ],
    onOk: function() {
      var dialog    = this,
          sections  = parseInt(dialog.getValueOf('accordion-setting', 'number')),
          thisPath  = CKEDITOR.plugins.getPath('accordion'),
          tone      = dialog.getValueOf('accordion-setting', 'dark') === true ? 'dark' : 'normal',
          merger, section;

      sections > 10 ? sections = 10 : sections = sections;

      section = '<div class="collapse-panel '+tone+'"><h6><a>Panel title</a></h6><div class="panel-content"><div class="panel-content-inner">Panel content</div></div></div>';
      merger = "";

      for (var i = 0; i < sections; i++) {
        merger = merger + section;
      }

      CKEDITOR.scriptLoader.load( thisPath + 'eventhandler/eventhandler.js' );
      editor.insertHtml(merger);
    }
  }
});
