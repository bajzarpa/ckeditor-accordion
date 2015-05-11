CKEDITOR.plugins.add('accordion', {
  icons: 'icon',
  init: function(editor) {
    editor.addCommand('accordion', new CKEDITOR.dialogCommand('accordion'));

    editor.ui.addButton('accordion', {
      label: 'Insert accordion',
      command: 'accordion',
      toolbar: 'insert,0',
      icon: CKEDITOR.plugins.getPath('intrenAccordion') + 'icons/icon.png'
    });

    CKEDITOR.dialog.add('accordion', this.path + 'dialogs/accordions.js');
  }
});
