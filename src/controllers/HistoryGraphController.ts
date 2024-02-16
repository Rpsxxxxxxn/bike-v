export default class HistoryGraphController {
  private static PAGE_ID = 'historyGraph';
  private static TITLE = 'グラフ表示';
  private constructor() {}

  public async index(req: any, res: any) {
    res.render('layout', {
      layout_name: 'historyGraph',
      page_id: HistoryGraphController.PAGE_ID,
      title: HistoryGraphController.TITLE,
      params: {}
    });
  }

  static create() {
    return new HistoryGraphController();
  }
}