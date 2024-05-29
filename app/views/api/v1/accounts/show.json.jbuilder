json.partial! 'api/v1/models/account', formats: [:json], resource: @account
json.latest_SyncYou_version @latest_SyncYou_version
json.partial! 'enterprise/api/v1/accounts/partials/account', account: @account if SyncYouApp.enterprise?
