export default class UtilService {
  static modeEmailHtml = 'email-html';

  static modeEmailMjml = 'email-mjml';

  static modePageHtml = 'page-html';

  static getMode(editor) {
    const cfg = editor.getConfig();

    if ('grapesjsnewsletter' in cfg.pluginsOpts) {
      return 'email-html';
    }
    if ('grapesjsmjml' in cfg.pluginsOpts) {
      return 'email-mjml';
    }
    if ('grapesjswebpage' in cfg.pluginsOpts) {
      return 'page-html';
    }

    throw new Error('wrong Mautic Grapesjs mode');
  }
}
