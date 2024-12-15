# Teatime

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/oL5dBIou3c)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/current/)
- [Yarn](https://yarnpkg.com/getting-started/install)

### Optional

- Android Studio
  - mainly for the Android Emulator
- Java v17
  - for running `bundletool` and building the app locally. Typically, everything can be done in the Expo Build Service though.
- A physical Android device

## Getting Started

```sh
yarn install --frozen-lockfile
yarn nx serve daily-questions
```

This should open the app Daily Questions in your browser. Replace `daily-questions` with the name of the project you want to run.

To get an overview of the workspace and its projects, run:

```sh
yarn nx graph
```

## Run tasks

Replace `daily-questions` with the name of the project you want to run a task for.

```sh
# run dev server
yarn nx serve daily-questions

# create production build
yarn nx build daily-questions

# list all available tasks
yarn nx show project daily-questions
```

To see all available targets to run for a project, run:

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
yarn nx g @nx/expo:app demo
```

To generate a new library, use:

```sh
yarn nx g @nx/react:lib mylib
```

You can use `yarn nx list` to get a list of installed plugins. Then, run `yarn nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

- [nx cloud dashboard](https://cloud.nx.app/orgs/657a07188090a230ff3649a6/workspaces/674a31767cf8fa3c76741446/overview)

### Nx Docs

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/expo?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Debugging

### Frequent issues

#### Nx is refusing to do anything

Start by running `yarn nx reset` and rerun your command.

If that doesn't work, clear your `node_modules`. **Don't forget to clear the `node_modules` in the project roots as well!** Sometimes some task may create those without you noticing.

### Debugging Nx and CI

Prerequisites

- [nektos/act](https://github.com/nektos/act) installed on your machine

Change `ci.yml` to

```yml
env:
  NX_CLOUD_ACCESS_TOKEN: ${{ secrets.NX_CLOUD_ACCESS_TOKEN }}
  # TODO remove after debugging. Get the commit hash from the PR
  NX_BASE: 08c3b5d32c0d69338a461ef9536c1a72021e1837
  # TODO remove after debugging. This is the commit hash on the target branch (typically main).
  NX_HEAD: f51b4e87bd389aaab9695b2824884d6dd1199a1b
# ...

# add the --verbose flag to see the output of the commands for debugging!
- run: yarn nx affected -t lint --verbose
```

Then run the pipeline locally.

```sh
# get the CI token from https://cloud.nx.app/orgs/657a07188090a230ff3649a6/workspaces/674a31767cf8fa3c76741446/settings/access
export NX_CLOUD_ACCESS_TOKEN='...'
act push -s NX_CLOUD_ACCESS_TOKEN=$NX_CLOUD_ACCESS_TOKEN
```

Note: you may have to set the docker image for `act`. I used `catthehacker/ubuntu:js-20.04` which is set in `~/.actrc` on your machine. The whole file looks like this:

```txt
-P ubuntu-latest=catthehacker/ubuntu:js-22.04
```
