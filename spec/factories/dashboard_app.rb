# frozen_string_literal: true

FactoryBot.define do
  factory :dashboard_app do
    sequence(:title) { |n| "Dashboard App #{n}" }
    content { [{ type: 'frame', url: 'https://SyncYou.com' }] }
    user
    account
  end
end
