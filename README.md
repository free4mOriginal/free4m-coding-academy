# Free4m Coding Academy
## Contribution Instructions

### 1. Submit Ticket
Create an issue by navigating to the Issues tab and clicking the New Issue button. Provide a name and description, then submit. The ticket will be automatically added to the Kanban board.
### 2. Await approval from Moderator
Let a moderator know that you would like to complete a ticket. Once approved, you will be assigned to the ticket, andyou can begin work.
### 3. Clone code from the Github Repository
If not done already, you will need to create a copy of the codebase on your own machine. First, open a terminal. Next, ensure you are in the directory you wish to place the project. To change directories, type 

``cd [Address of Desired Directory]``

To create the copy, click the "Code" button in the "Code" tab on Github, and copy the listed http address, or if you have an SSH key, the SSH address. Then, open a terminal and type
        
``git clone [HTTP/SSH ADDRESS]`` 

### 4. Create Branch
Because writing directly to the master branch is inadvisable, you must create a seperate branch with the command

``git checkout -b [New Branch Name]``

The name of the branch should start with the feature's ticket number, followed by the name of the issue, in snake case, e.g. **1_add_example**. Ensure all changes to the code are made in the feature branch. You can check the current branch with the command

``git branch``

Before your code can be submitted, your feature branch must be published to the remote repository. This can be done with 

``git push -u [Remote Name - origin, unless changed] [Branch Name]``

### 5. Write Code
### 6. Create Pull Request
Before creating the pull request, ensure your remote branch is up to date with your local branch. In the Pull Requests tab, click New Pull Request, then select your feature branch from the compare dropdown. Write a name and description for the request, then click Create Pull Request.
### 7. Await Peer Review and Merge
Other contributors will review the code to ensure its compatibility. Afterward, if no issues are found, the code will be merged into the project, and the ticket will be completed.

<span style="color:red">**DO NOT MERGE YOUR OWN CODE**</span>