function analytics_dau() {
  // profile_idの指定
  // 106697757は、Web_LP
  var PROFILE_ID = "ga:106697757";

  // metricsとdimensionの指定
  var metrics = "ga:sessions";
  var optArgs = {
    'dimensions': 'ga:date',
  };
  
  // end_date(昨日)を動的に指定  
  var yesterday = new Date(new Date().getTime()-1000*60*60*24);
  var formatted_yesterday = Utilities.formatDate(yesterday, "JST", "yyyy-MM-dd"); 
  

  // データ取得の開始日と終了日の指定
  var startDate = "2016-03-01";
  var endDate = formatted_yesterday;

  // アナリティクスのデータ取得
  var ga = Analytics.Data.Ga.get(PROFILE_ID, startDate, endDate, metrics, optArgs).rows;
  
  // データの出力先のスプレッドシート取得
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Google_Analytics(Google Apps Script)');

  // データの出力先のスプレッドシートの固定のセルに値の出力
  sheet.getRange(2, 2, ga.length, ga[0].length).setValues(ga); 
}
