<img src="https://user-images.githubusercontent.com/2246121/282256557-1570674b-d142-4198-9740-69404cc6a339.png#gh-light-mode-only" width="100%" alt="Chat dashboard dark mode"/>
<img src="https://user-images.githubusercontent.com/2246121/282256632-87f6a01b-6467-4e0e-8a93-7bbf66d03a17.png#gh-dark-mode-only" width="100%" alt="Chat dashboard"/>

___

# SyncYou 

Customer engagement suite, an open-source alternative to Intercom, Zendesk, Salesforce Service Cloud etc.
<p>
  <a href="https://heroku.com/deploy?template=https://github.com/SyncYou/SyncYou/tree/master" alt="Deploy to Heroku">
     <img width="150" alt="Deploy" src="https://www.herokucdn.com/deploy/button.svg"/>
  </a>
  <a href="https://marketplace.digitalocean.com/apps/SyncYou?refcode=f2238426a2a8" alt="Deploy to DigitalOcean">
     <img width="200" alt="Deploy to DO" src="https://www.deploytodo.com/do-btn-blue.svg"/>
  </a>
</p>

<p>
  <a href="https://codeclimate.com/github/SyncYou/SyncYou/maintainability"><img src="https://api.codeclimate.com/v1/badges/e6e3f66332c91e5a4c0c/maintainability" alt="Maintainability"></a>
  <img src="https://img.shields.io/circleci/build/github/SyncYou/SyncYou" alt="CircleCI Badge">
    <a href="https://hub.docker.com/r/SyncYou/SyncYou/"><img src="https://img.shields.io/docker/pulls/SyncYou/SyncYou" alt="Docker Pull Badge"></a>
  <a href="https://hub.docker.com/r/SyncYou/SyncYou/"><img src="https://img.shields.io/docker/cloud/build/SyncYou/SyncYou" alt="Docker Build Badge"></a>
  <img src="https://img.shields.io/github/commit-activity/m/SyncYou/SyncYou" alt="Commits-per-month">
  <a title="Crowdin" target="_self" href="https://SyncYou.crowdin.com/SyncYou"><img src="https://badges.crowdin.net/e/37ced7eba411064bd792feb3b7a28b16/localized.svg"></a>
  <a href="https://discord.gg/cJXdrwS"><img src="https://img.shields.io/discord/647412545203994635" alt="Discord"></a>
  <a href="https://status.SyncYou.com"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSyncYou%2Fstatus%2Fmaster%2Fapi%2FSyncYou%2Fuptime.json" alt="uptime"></a>
  <a href="https://status.SyncYou.com"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSyncYou%2Fstatus%2Fmaster%2Fapi%2FSyncYou%2Fresponse-time.json" alt="response time"></a>
  <a href="https://artifacthub.io/packages/helm/SyncYou/SyncYou"><img src="https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/artifact-hub" alt="Artifact HUB"></a>
</p>

<img src="https://user-images.githubusercontent.com/2246121/282255783-ee8a50c9-f42d-4752-8201-2d59965a663d.png#gh-light-mode-only" width="100%" alt="Chat dashboard dark mode"/>
<img src="https://user-images.githubusercontent.com/2246121/282255784-3d1994ec-d895-4ff5-ac68-d819987e1869.png#gh-dark-mode-only" width="100%" alt="Chat dashboard"/>

SyncYou is an open-source, self-hosted customer engagement suite. SyncYou lets you view and manage your customer data, communicate with them irrespective of which medium they use, and re-engage them based on their profile.

## Features

SyncYou supports the following conversation channels:

 - **Website**: Talk to your customers using our live chat widget and make use of our SDK to identify a user and provide contextual support.
 - **Facebook**: Connect your Facebook pages and start replying to the direct messages to your page.
 - **Instagram**: Connect your Instagram profile and start replying to the direct messages.
 - **Twitter**: Connect your Twitter profiles and reply to direct messages or the tweets where you are mentioned.
 - **Telegram**: Connect your Telegram bot and reply to your customers right from a single dashboard.
 - **WhatsApp**: Connect your WhatsApp business account and manage the conversation in SyncYou.
 - **Line**: Connect your Line account and manage the conversations in SyncYou.
 - **SMS**: Connect your Twilio SMS account and reply to the SMS queries in SyncYou.
 - **API Channel**: Build custom communication channels using our API channel.
 - **Email**: Forward all your email queries to SyncYou and view it in our integrated dashboard.

And more.

Other features include:

- **CRM**: Save all your customer information right inside SyncYou, use contact notes to log emails, phone calls, or meeting notes.
- **Custom Attributes**: Define custom attribute attributes to store information about a contact or a conversation and extend the product to match your workflow.
- **Shared multi-brand inboxes**: Manage multiple brands or pages using a shared inbox.
- **Private notes**: Use @mentions and private notes to communicate internally about a conversation.
- **Canned responses (Saved replies)**: Improve the response rate by adding saved replies for frequently asked questions.
- **Conversation Labels**: Use conversation labels to create custom workflows.
- **Auto assignment**: SyncYou intelligently assigns a ticket to the agents who have access to the inbox depending on their availability and load.
- **Conversation continuity**: If the user has provided an email address through the chat widget, SyncYou will send an email to the customer under the agent name so that the user can continue the conversation over the email.
- **Multi-lingual support**: SyncYou supports 10+ languages.
- **Powerful API & Webhooks**: Extend the capability of the software using SyncYou’s webhooks and APIs.
- **Integrations**: SyncYou natively integrates with Slack right now. Manage your conversations in Slack without logging into the dashboard.

## Documentation

Detailed documentation is available at [SyncYou.com/help-center](https://www.SyncYou.com/help-center).

## Translation process

The translation process for SyncYou web and mobile app is managed at [https://translate.SyncYou.com](https://translate.SyncYou.com) using Crowdin. Please read the [translation guide](https://www.SyncYou.com/docs/contributing/translating-SyncYou-to-your-language) for contributing to SyncYou.

## Branching model

We use the [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model. The base branch is `develop`.
If you are looking for a stable version, please use the `master` or tags labelled as `v1.x.x`.

## Deployment

### Heroku one-click deploy

Deploying SyncYou to Heroku is a breeze. It's as simple as clicking this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/SyncYou/SyncYou/tree/master)

Follow this [link](https://www.SyncYou.com/docs/environment-variables) to understand setting the correct environment variables for the app to work with all the features. There might be breakages if you do not set the relevant environment variables.


### DigitalOcean 1-Click Kubernetes deployment

SyncYou now supports 1-Click deployment to DigitalOcean as a kubernetes app.

<a href="https://marketplace.digitalocean.com/apps/SyncYou?refcode=f2238426a2a8" alt="Deploy to DigitalOcean">
  <img width="200" alt="Deploy to DO" src="https://www.deploytodo.com/do-btn-blue.svg"/>
</a>

### Other deployment options

For other supported options, checkout our [deployment page](https://SyncYou.com/deploy). 

## Security

Looking to report a vulnerability? Please refer our [SECURITY.md](./SECURITY.md) file.


## Community? Questions? Support ?

If you need help or just want to hang out, come, say hi on our [Discord](https://discord.gg/cJXdrwS) server.


## Contributors ✨

Thanks goes to all these [wonderful people](https://www.SyncYou.com/docs/contributors):

<a href="https://github.com/SyncYou/SyncYou/graphs/contributors"><img src="https://opencollective.com/SyncYou/contributors.svg?width=890&button=false" /></a>


*SyncYou* &copy; 2017-2024, SyncYou Inc - Released under the MIT License.
