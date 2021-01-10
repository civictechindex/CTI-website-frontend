# How to contribute
For any contribution you have in mind, please open a detailed issue on what you are contributing and why. This way, there can be room to have a productive discussion before any code is written. It can be discussed if the contribution is a good fit for this project, fine tune contribution goals, and more. 

Feel free to drop into the [Civic Tech Index Slack](https://hackforla.slack.com/archives/CTYAKM0CW) to reach out and ask any questions.

# OVERVIEW

**Set up**
1. [Join the Repo Team](#step-1-become-a-member-of-the-repository-team)

2. [Using Git](#using-git) and [Fork the Repo](#step-2-fork-the-repository)

3. [Clone to your local machine](#step-3-clone-your-online-repository-to-your-local-computer)

4. [Set up Docker](#step-4-setting-up-docker)

**Before you start working on an issue**

5. [Switch to new issue branch before you start making changes](#step-5-change-to-a-new-branch)


**After you've worked on your issue and before you make a pull request:**

6. [Code quality](#code-quality)

7. [Check upstream before you push](#step-7-check-upstream-before-you-push).

7a. [No changes in the upstream repo](#step-7a-no-changes-in-the-upstream-repository)

**Or**

7b. [Conflicting changes in the upstream repo](#step-7b-conflicting-changes-in-the-upstream-repository) and how to resolve them

**Okay. You're good to go!**

8. [Complete the pull request](#step-8-complete-the-pull-request)

---

# Forking and cloning the repository with proper security

## Step 1 Become a member of the repository Team

1. In the [Civic Tech Index Slack](https://hackforla.slack.com/archives/CTYAKM0CW) channel, post your email address to the project manager and we'll add you to the Google Drive.
Once you've been added to the Google Drive, we will send you a link to the roster and request that you add yourself. 

1. Once you've added yourself to the roster, we have verified you can edit files in the CTI Google Drive. Please notify the PM.

1. Setup two factor authentication on your account https://github.com/hackforla/governance/issues/20

1. We will add you as a member to the GitHub repository Team. Once you have accepted the GitHub invite (comes via email or in your GitHub notifications), please mark your membership public https://help.github.com/en/articles/publicizing-or-hiding-organization-membership#changing-the-visibility-of-your-organization-membership

## Using Git

This section discusses some tips and best practices for working with Git.

### Making changes, committing and pushing

1. Generally changes start on your local clone of your fork of this repository, in your own branch.

1. Commit your changes with a comment related to the issue it addresses to your local repository.

1. Push that commit(s) to your online GitHub fork.

1. From the `CTI-website-frontend` repository, create a Pull Request which asks `CTI-website-frontend` to pull changes from your fork into the main repository.

1. After the owner of the `CTI-website-frontend` repository approves and merges your Pull Request, your changes will be live on the website. 

## Step 2 Fork the repository

In https://github.com/CTI-website-frontend/website, look for the fork icon in the top right. Click it and create a fork of the repository.

For git beginners, a fork is a copy of the repository that will be placed on your GitHub account url.

It should create a copy here: https://github.com/your_GitHub_user_name/website, where `your_GitHub_user_name` is replaced with exactly that.

Note that this copy is on a remote server on the GitHub website and not on your computer yet.

If you click the icon again, it will not create a new fork but instead give you the URL associated with your fork.

## Step 3 Clone your online repository to your local computer

For git beginners, this process will create a third copy of the repository on your local desktop.

First create a new folder on your desktop that will contain `CTI-website-frontend` projects.

In your shell, navigate there then run the following commands:

```bash
git clone https://github.com/your_GitHub_user_name/website.git
```

You should now have a new folder in your `CTI-website-frontend` folder called `website`.

Verify which URL your `origin` remote is pointing to:

```bash
git remote show origin
```

If you accidentally cloned the `CTI-website-frontend/website.git` then you can correct that with the following two commands: 

1) Change your local copy to upload to your fork with the following:

```bash
git remote set-url origin https://github.com/your_user_name/website.git
```

2) Add another remote called `upstream` that points to the `CTI-website-frontend` version of the repository. This will allow you to incorporate changes later:

```bash
git remote add upstream https://github.com/CTI-website-frontend/website.git
```

## Step 4: Setting up Docker

Docker is the recommended approach to quickly getting started with local development. (ELI5: Docker helps create a local/offline version of the CTI-website-frontend.org website on your computer so you can test out your code before submitting a pull request).

There are two pre-requisites: Docker and Docker Compose.
The recommended installation method is [Docker Desktop](https://docs.docker.com/install/) for Windows 10 64-bit,
Mac, and Linux users. Users of unsupported operating systems may check out [Docker Toolbox](https://docs.docker.com/compose/gettingstarted/) instead.

More on using Docker and the concepts of containerization:

* [Get started with Docker](#docker)
* [Get started with Docker Compose](https://docs.docker.com/compose/gettingstarted/)

*Ensure you run the `docker` commands below from a shell inside the local directory containing your clone of this repository.*

### How to Run with Docker
1) Build the image: `docker build -t [image-name] .`
2) Run the image: `docker run -p [port#]:80 [image-name]`
3) Open in browser: "localhost:[port#]"

*<ins>Example</ins>:
`docker build -t webmasterimage .`
`docker run -p 80:80 webmasterimage`
In browser go to localhost:80*

### Build and serve the website locally

This command starts a jekyll server locally. The server watches for changes to
the source files and rebuilds and refreshes the site automatically in your browser.

```bash
docker-compose up
```

Now browse to http://localhost:4000

### Tear down

To stop and completely remove the jekyll server (i.e. the running Docker container):

*(do this anytime Docker or jekyll configuration or other repository settings change)*

```bash
docker-compose down
```

To stop the server, but not destroy it (often sufficient for day-to-day work):

```bash
docker-compose stop
```

Bring the same server back up later with:

```bash
docker-compose up
```
<br>

## Step 5: Change to a new branch

Create a new branch for each issue you work on. Doing all your work on topic branches leaves your repository's main branch (named `main`) unmodified and greatly simplifies keeping your fork in sync with the main project.

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
git checkout -b fix-logo-width-311
```

The text after the `-b`, in the example `fix-logo-width-311`, will be the name of your new branch. Choose a branch name that relates to the issue you're working on. (No spaces!)

The format should look like the scheme above where the words are a brief description of the issue that will make sense at a glance to someone unfamiliar with the issue. 

No law of physics will break if you don't adhere to this scheme, but laws of git will break if you add spaces.

When you've finished working on your issue, follow the steps below to prepare your changes to push to your repository. 

c) Prepare your changes to push to your repository

Once you are done with the work on your issue you will push it to your repository.  Before you can push your work to your repository, you will stage and commit your changes.  These two commands are similar to the save command that you have used to in other programs. 

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

This command saves your work, and prepares it to push to your repository.  Use the `-m` flag to quickly add a message to your commit. Your message should be a short description of the issue you are working.  It will be extremely helpful if other people can understand your message, so try to reisst the temptation to be overly cryptic.

To commit your changes with a message, run:
```bash
git commit -m “insert message here”
```

Congratulations!  You are now ready to push your work to your repository.

## Step 6 Code Quality

We use ESLint and Code Climate to improve code quality. ESLint works on your local machine before you submit your PR, while Code Climate is part of the CI/CD process on GitHub after you submit.

### ESLint

ESLint is included in the repo when you run `npm install`. We use the `eslint` and `eslint-plugin-react` packages. The exact settings can be found in `.eslintr.json`. **Be sure to lint your code before pushing to GitHub.**

To lint the entire repo, run `npm run lint`

To lint a single file, run `npx eslint path/to/file.js`

To see if ESLint can automatically fix errors for you in that file, run `npx eslint --fix path/to/file.js`

Eliminate errors and warnings before submitting your PR. (If that can't be done for some reason, please explain why in the PR.)

### ESLint and Your Development Environment

Most editors, including Visual Studio Code, can show the linting errors and warnings to you while you edit. Once you have installed the repo, just make sure you have installed the [ESLint Extention](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) as well. (Similar tools exist for most other code editors.)

## Step 7 Check upstream before you push

Before you push your local commits to your repository, check to see if there have been updates made in the main Hack For LA website repository. `git fetch` will check remote repositories for changes without altering your local repository.

```bash
git fetch upstream
```

### Step 7a No changes in the upstream repository

If you do not see any output, there have not been any changes in the
main CTI Front End website repository since the last time you
checked. So it is safe to push your local commits to your fork.

If you just type `git push` you will be prompted to create a new branch in your GitHub repository. The more complete command below will create a new branch on your copy of the website repository, and then push your local branch there. The name at the end of this command should be the same as the name of the local branch that you created back in step 7, as in the example below:

```bash
git push --set-upstream origin fix-logo-width-311
```

### Step 7b conflicting changes in the upstream repository

When you check the upstream repository, you may see output like this:

```bash
Fetching upstream
remote: Enumerating objects: 11, done.
remote: Counting objects: 100% (11/11), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 11 (delta 5), reused 7 (delta 4), pack-reused 0
Unpacking objects: 100% (11/11), 8.25 KiB | 402.00 KiB/s, done.
From https://github.com/CTI-website-frontend/website
 + 770d667...14f9f46 Bonnie     -> CTI-website-frontend/Bonnie  (forced update)
 * [new branch]      bonnie     -> CTI-website-frontend/bonnie
   5773ebe..0c86ecd  main   -> CTI-website-frontend/main
```

You can safely ignore changes in other issue branches, such as
`bonnie` above. But if you see changes in main, as in
`5773ebe..0c86ecd  main   -> CTI-website-frontend/main`, you should
incorporate those changes into your repository before merging or
rebasing your issue branch. Use the [instructions below](#incorporating-changes-from-upstream)
to bring your fork up to date with the main repository.


### Incorporating changes from upstream

Your fork of this repository on GitHub, and your local clone of that fork, will
get out of sync with this (upstream) repository from time to time.  (That's what has happend when you see something like "This branch is 1 commit behind CTI-website-frontend:main" on the github website version of your CTI-website-frontend repository.)

One way to keep your fork up to date with this repository is to follow
these instruction: [Syncing your fork to the original repository via the browser](https://github.com/KirstieJane/STEMMRoleModels/wiki/Syncing-your-fork-to-the-original-repository-via-the-browser)

You can also update your fork via the local clone of your fork, using
these instructions. Assuming you have a local clone with remotes
`upstream` (this repo) and `origin` (your GitHub fork of this repo):

First, you will need to create a local branch which tracks upstream/main.  You will only need to do this once; you do not need to do this every time you want to incorporate upstream changes. 

Run the following two commands: 

```bash
git fetch upstream
git checkout -b upstream-main --track upstream/main
```

If you have already created the branch upstream-main, the following commands will incorporate upstream changes: 

```bash
git checkout upstream-main # Move to the branch you want to merge with. 
git pull  # This updates your tracking branch to match the main branch in this repository
git checkout main  # Move back to your main branch
git merge upstream-main  # Merge to bring your main current. 
```
If you do all your work on topic branches (as suggested above) and keep main free of local modifications, this merge should apply cleanly.

Then push the merge changes to your GitHub fork:  

```bash
git push
```
If you go to your online github repository this should remove the message "This branch is x commit behind CTI-website-frontend:main".

### Incorporating changes into your topic branch

To incorporate these updates from the main GitHub repository into your
topic branch, you can 'rebase' your branch onto your updated main
branch. NOTE you should only rebase if you have never pushed your
topic branch to GitHub (or shared it with another collaborator). The name 'fix-logo-width-311' below should be replaced with the name of your branch in the following example, as usual.

```bash
git checkout fix-logo-width-311
git rebase main
```

If you receive warnings about conflicts, abort the rebase with `git
rebase --abort` and instead merge main into your branch.

```bash
git checkout fix-logo-width-311
git merge main
```

## Step 8 Complete the pull request

```bash
git push --set-upstream origin fix-logo-width-311
```

Now create a new pull request to ask for your updates to be incorporated into the live web site. 
Go to https://github.com/CTI-website-frontend/website/pulls and click on "New pull request". 
Please rename your pull request something descriptive i.e. "building a project card for civic opportunity project".
Also, since your changes are not in the CTI-website-frontend/website repostory, you need to click the "compare across forks" link in the
first paragraph to make you repository and your new branch available. Review the changes that will be included in the pull
request and, if it fixes a specific issue, include `Fixes #140` in the pull request message so the issue will be closed automatically once
your pull request is accepted and merged.

Once you have finished working on the issue you have chosen, commit the changes to your local branch (e.g. `fix-logo-width-311`).

## Civic Tech Index Architecture

### A Few Notes

The Civic Tech Index project is separated into two repositories in GitHub, [CTI-website-frontend](https://github.com/civictechindex/CTI-website-frontend), the front end built in React, and [CTI-website-backend](https://github.com/civictechindex/CTI-website-backend), the back end built in Django and Python.

## Useful Links

### Supported Platforms

- [dockertoolbox](https://docs.docker.com/toolbox/overview/)
- [react](https://reactjs.org/)
- [hooks](https://reactjs.org/docs/hooks-overview.html)

### Tutorials

- [Github Guides](https://guides.github.com/) 
- [docker](https://docs.docker.com/get-started/)
- [dockercompose](https://docs.docker.com/compose/gettingstarted/)
- [dockerdesktop](https://docs.docker.com/install/)


[Back to Top](#overview)
