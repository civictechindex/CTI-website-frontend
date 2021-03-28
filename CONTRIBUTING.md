# How to contribute

For any contribution you have in mind, please open a detailed issue on what you are contributing and why. This way, there can be room to have a productive discussion before any code is written. It can be discussed if the contribution is a good fit for this project, fine tune contribution goals, and more.

Feel free to drop into the [Civic Tech Index Slack](https://hackforla.slack.com/archives/CTYAKM0CW) to reach out and ask any questions.

# OVERVIEW

**Set up**

1. [Join the Repo Team](#step-1-become-a-member-of-the-repository-team)

2. [Using Git](#step-2-using-git)

3. [Clone to your local machine](#step-3-clone-your-online-repository-to-your-local-computer)

4. [Set up Docker](#step-4-setting-up-docker)

**Before you start working on an issue**

5. [Switch to new issue branch before you start making changes](#step-5-change-to-a-new-branch)

**After you've worked on your issue and before you make a pull request (PR):**

6. [Code quality](#code-quality)

**Okay. You're good to go!**

8. [Complete the pull request](#step-8-complete-the-pull-request)

---

# Cloning the repository with proper security

## Step 1: Become a member of the repository team

1. In the [Civic Tech Index Slack](https://hackforla.slack.com/archives/CTYAKM0CW) channel, post your email address to the project manager and we'll add you to the Google Drive.
Once you've been added to the Google Drive, we will send you a link to the roster and request that you add yourself.

1. Once you've added yourself to the roster, we have verified you can edit files in the CTI Google Drive. Please notify the PM.

1. Setup two factor authentication on your account <https://github.com/hackforla/governance/issues/20>

1. We will add you as a member to the GitHub repository Team. Once you have accepted the GitHub invite (comes via email or in your GitHub notifications), please mark your membership public <https://help.github.com/en/articles/publicizing-or-hiding-organization-membership#changing-the-visibility-of-your-organization-membership>

## Step 2: Using Git

This section discusses some tips and best practices for working with Git.

### Making changes, committing and pushing

1. Generally changes start on your local clone of this repository, in your own branch.

1. Commit your changes with a comment related to the issue it addresses to your local repository.

1. Push that commit(s) to GitHub.

1. From the `CTI-website-frontend` repository, create a pull request (PR) which asks `CTI-website-frontend` to merge your changes into the repository.

1. After the owner of the `CTI-website-frontend` repository approves and merges your pull request, your changes will be live on the website.


## Step 3: Clone the repository to your local computer

For git beginners, this process will create a copy of the repository on your local desktop.

First create a new folder on your computer that will contain Civic Tech Index projects.

In your shell, navigate there then run the following command:

```bash
git clone https://github.com/civictechindex/CTI-website-frontend.git
```

You should now have a new folder called `CTI-website-frontend`.

_Note: Instead of working on a clone, you can choose to make edits on a fork. To view the previous instructions on how to do that, look at [the version of this document dated Jan 14, 2021](https://github.com/civictechindex/CTI-website-frontend/blob/c4320bc33f6eada97bf3f404d240cac382ee7552/CONTRIBUTING.md)._

## Step 4: Setting up Docker

Docker is the recommended approach to quickly getting started with local development. (Docker helps create a local/offline version of the `CTI-website-frontend` website on your computer so you can test out your code before submitting a pull request.)

The recommended installation method is [Docker Desktop](https://docs.docker.com/get-docker/) for Windows 10 64-bit and Mac. Linux users may check out [Docker Engine](https://docs.docker.com/engine/install/) instead.

More on using Docker and the concepts of containerization: [Docker overview](https://docs.docker.com/get-started/overview/)

*Ensure you run the `docker` commands below from a shell inside the local directory containing your clone of this repository.*

### How to Run with Docker

1) Build the image: `docker build -t [image-name] .`
2) Run the image: `docker run -p [port#]:80 [image-name]`
3) Open in browser: "localhost:[port#]"

Example:

`docker build -t webmasterimage .`\
`docker run -p 80:80 webmasterimage`\
In browser go to [localhost:80](localhost:80)

## Step 5: Change to a new branch

Create a new branch for each issue you work on. Doing all your work on topic branches leaves the repository's main branch (named `main`) unmodified.

a) Check current branch

The `git branch` command will let you know what branch you are in, and what branch names are already in use.

```bash
git branch
```

You will see a list of all of your branches. There will be a star (`*`) next to the branch that you are currently in. By default you should start on the `main` branch.

b) Create a new branch where you will work on your issue

The `git checkout` command will create and change to a new branch where you will do the work on your issue.  In git, the checkout command lets you navigate between different branches.  Using the `-b` flag you can create a new branch and immediately switch into it.

To create a new issue branch, and switch into it (be sure to customize the branch name to your own):

```bash
git checkout -b build-project-card-140
```

The text after the `-b`, in the example `build-project-card-140`, will be the name of your new branch. Choose a branch name that relates to the issue you're working on. (No spaces!)

The format should look like the scheme above where the words are a brief description of the issue that will make sense at a glance to someone unfamiliar with the issue.

No law of physics will break if you don't adhere to this scheme, but laws of git will break if you add spaces.

When you've finished working on your issue, follow the steps below to prepare your changes to push to GitHub.

c) Prepare your changes to push to the repository

Once you are done with the work on your issue you will push it to GitHub. Before you can push your work, you will stage and commit your changes.  These two commands are similar to the save command that you have used to in other programs.

-Use the `git add` command to stage your changes.
This command prepares your changes before you commit them. You can stage files one at a time using the filename, or you can use the `.` to stage all of the files that you have added or made changes to.

Run the command:

```bash
git add .
```

-Use the `git status` command to see what files are staged.

This command will list the files that have been staged.  These are the files that will be committed (saved) when you run the next command, `git commit`.

```bash
git status
```

-Use the `git commit` command

This command saves your work, and prepares it to push to GitHub.  Use the `-m` flag to quickly add a message to your commit. Your message should be a short description of the issue you are working.  It will be extremely helpful if other people can understand your message, so try to resist the temptation to be overly cryptic.

To commit your changes with a message, run:

```bash
git commit -m 'insert message here'
```

Congratulations!  You are now ready to push your work to GitHub.

## Step 6: Code quality

We use ESLint and Code Climate to improve code quality. ESLint works on your local machine before you submit your PR, while Code Climate is part of the CI/CD process on GitHub after you submit.

### ESLint

ESLint is included in the repo when you run `npm install`. We use the `eslint` and `eslint-plugin-react` packages. The exact settings can be found in the `.eslintrc.json` file.

To lint the entire repo, run `npm run lint` from the command line. 
_Note: If you encouter "No files matching the pattern "'src/**/*.js'" were found." error msg after running `npm run lint` from the command line, try to update the pattern of 'lint' with escaped double quotes in package.json. The new pattern should look like this: "lint": "eslint \"src/**/*.js\"" 

To lint a single file, run `npx eslint path/to/file.js`

To see if ESLint can automatically fix warnings and errors for you in that file, run `npx eslint --fix path/to/file.js`

**Be sure to lint your code before pushing changes to GitHub.** Eliminate errors and warnings before submitting your PR. (If that can't be done for some reason, please explain why in the PR.)

### ESLint and Your Development Environment

Most editors, including Visual Studio Code, can show the linting errors and warnings to you while you edit. Once you have installed the repo, just make sure you have installed the [ESLint Extention](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) as well. (Similar tools exist for most other code editors.)

### Code Climate

Code Climate is triggered by submitting a pull request. You don't have to do anything else beyond submitting the PR. ESLint warnings and errors include issues that would flag warnings in Code Climate, so resolving ESlint issues before submitting PRs will frequently avoid Code Climate errors.

## Step 8: Complete the pull request

Do all your work on topic branches (as suggested above). To push the your branch's changes to GitHub:

```bash
git push --set-upstream origin your-branch-name
```

Tip: If you simply type `git push` instead, the command will fail, but it will also print out the full command above for an easy copy-paste.

Note: If this is your first time pushing after setting up two factor authentication, you may receive an authentication error and need to type in your github credentials. If you are using the command line to push and the credentials you typed in failed, [follow this link](https://medium.com/@ginnyfahs/github-error-authentication-failed-from-command-line-3a545bfd0ca8) to see how to create a personal access token to use as the password for your credentials.

Now create a new pull request to ask for your updates to be incorporated into the live web site.
Go to <https://github.com/civictechindex/CTI-website-frontend/pulls> and click on "New pull request".
Please rename your pull request something descriptive, e.g., "Build a project card".
Review the changes that will be included in the pull request and, if it fixes a specific issue, include `Closes #140` in the pull request message so the issue will be closed automatically once your pull request is accepted and merged.

(Actually, you can include a few verbs — "Closes," "Fixes," or "Resolves" — plus the number sign and the issue number. To read more on linking issues and PRs, see ["Linking a pull request to an issue using a keyword"](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) in GitHub's docs.)

## Civic Tech Index Architecture

### A Few Notes

The Civic Tech Index project is separated into two repositories in GitHub, [CTI-website-frontend](https://github.com/civictechindex/CTI-website-frontend), the front end built in React, and [CTI-website-backend](https://github.com/civictechindex/CTI-website-backend), the back end built in Django and Python.

## Useful Links

### Supported Platforms

- [React](https://reactjs.org/)
- [React - Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

### Tutorials

- [GitHub Guides](https://guides.github.com/)
- [Docker - Orientation and setup](https://docs.docker.com/get-started/)
- [Docker Desktop](https://docs.docker.com/install/)

[Back to Top](#overview)
