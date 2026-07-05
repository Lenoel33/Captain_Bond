// Google Apps Script for Captain Bond registrations
// 1) Create a Google Sheet.
// 2) Extensions > Apps Script.
// 3) Paste this code.
// 4) Replace SHEET_NAME if needed.
// 5) Deploy > New deployment > Web app.
// 6) Execute as: Me. Who has access: Anyone.
// 7) Copy the Web App URL into script.js as GOOGLE_SCRIPT_URL.

const SHEET_NAME = 'Registrations';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    const headers = [
      'submission_date', 'activity_name', 'activity_id', 'agent_id', 'agent_name',
      'language', 'num_participants', 'time_slot', 'phone', 'instagram',
      'custom_activity_request', 'willing_to_pay', 'budget_range'
    ];

    if (sheet.getLastRow() === 0) sheet.appendRow(headers);

    const data = JSON.parse(e.postData.contents || '{}');
    sheet.appendRow(headers.map(h => data[h] || ''));

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
