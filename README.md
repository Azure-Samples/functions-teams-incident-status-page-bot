---
page_type: sample
languages:
- javascript
products:
- azure-functions
- azure-signalr
- microsoft-teams
description: "Simple Azure Functions bot for managing incidents from Microsoft Teams"
urlFragment: "functions-teams-incident-status-page-bot"
---

# Teams incident status bot

<!-- 
Guidelines on README format: https://review.docs.microsoft.com/help/onboard/admin/samples/concepts/readme-template?branch=master

Guidance on onboarding samples to docs.microsoft.com/samples: https://review.docs.microsoft.com/help/onboard/admin/samples/process/onboarding?branch=master

Taxonomies for products and languages: https://review.docs.microsoft.com/new-hope/information-architecture/metadata/taxonomies?branch=master
-->

![demo](tailwind-incident-bot.gif)

## Contents

Outline the file contents of the repository. It helps users navigate the codebase, build configuration and any related assets.

| File/folder       | Description                                |
|-------------------|--------------------------------------------|
| `src`             | Sample source code.                        |
| `.gitignore`      | Define what to ignore at commit time.      |
| `CHANGELOG.md`    | List of changes to the sample.             |
| `CONTRIBUTING.md` | Guidelines for contributing to the sample. |
| `README.md`       | This README file.                          |
| `LICENSE`         | The license for the sample.                |

## Prerequisites

* Azure Functions
* Azure SignalR Service
* Microsoft Teams

## Deployment instructions:

- Create the Azure Function app, Storage account, and SignalR Service with this button: [![Deploy to Azure](https://azuredeploy.net/deploybutton.svg)](https://azuredeploy.net/)

- Incident statuses are stored in a table in the Storage account, but there's no way to create this table with ARM. In the Azure portal, open the Storage account and add a table named `statuses`.

    ![Create table](create-table.png)

- Now navigate to the function app, and open the `teams-webhook` function. Click "Get Function URL" and copy the URL.

    ![Get Function URL](get-func-url.png)

- Finally, open Teams and navigate to the "Apps" page of the team in which you want to create the bot. Click "Create outgoing webhook".

    ![Create outgoing webhook](create-webhook.png)

    Use `StatusPage` as the bot name (this is hardcoded, for now). Paste in the function URL, and enter a description.

    ![Webhook details](webhook-info.png)

    You will be prompted with a secret code for validating webhook calls from Teams. We currently do not use this. Close the dialog box.


## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

