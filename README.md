# website
The website for the Civic Tech Index

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

## Step 6 Check upstream before you push

Before you push your local commits to your repository, check to see if there have been updates made in the main Hack For LA website repository. `git fetch` will check remote repositories for changes without altering your local repository.

```bash
git fetch upstream
```

### Step 6a No changes in the upstream repository

If you do not see any output, there have not been any changes in the
main CTI Front End website repository since the last time you
checked. So it is safe to push your local commits to your fork.

If you just type `git push` you will be prompted to create a new branch in your GitHub repository. The more complete command below will create a new branch on your copy of the website repository, and then push your local branch there. The name at the end of this command should be the same as the name of the local branch that you created back in step 6, as in the example below:  

```bash
git push --set-upstream origin fix-logo-width-311
```

### Step 6b conflicting changes in the upstream repository

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

## Step 7 Complete the pull request

```bash
git push --set-upstream origin fix-logo-width-311
```

Now create a new pull request to ask for your updates to be
incorporated into the live web site. Go to
https://github.com/CTI-website-frontend/website/pulls and click on "New pull
request". Please rename your pull request something descriptive i.e. "building a project card for civic opportunity project".
Also, since your changes are not in the CTI-website-frontend/website
repostory, you need to click the "compare across forks" link in the
first paragraph to make you repository and your new branch
available. Review the changes that will be included in the pull
request and, if it fixes a specific issue, include `Fixes #140` in the
pull request message so the issue will be closed automatically once
your pull request is accepted and merged.

Once you have finished working on the issue you have chosen, commit
the changes to your local branch (e.g. `fix-logo-width-311`).

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
