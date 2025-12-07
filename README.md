# Free4m Coding Academy
## Contribution Instructions

### 1. Submit Ticket
An issue must first be created. Create an issue by navigating to the "Issues" tab and clicking the "New Issue" button. Provide a name and description. Then, select a project and type by selecting the gear icons by their respective terms on the sidebar. The project will be **free4m-academy**. The three possible types are as follows:
- **Bug**: A request to fix errors or unexpected behavior
- **Feature**: A request for new functionality
- **Task**: A request for a specific change that is neither a bug fix nor a new feature

Labels can also be added, as needed. When ready, click the "Create" button. The issue will automatically be added as a ticket to the Kanban board, found in the "Projects" tab in the free4m-academy project.
### 2. Await approval from Moderator
Let a moderator know that you would like to complete a ticket. Once approved, you will be assigned to the ticket, and the ticket will be moved to the "In Progress" section of the Kanban board.
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
Contributors are unable to directly push to the master branch. Therefore, a pull request must be submitted. Before creating a pull request, ensure your remote branch is up to date with your local branch. In the "Pull Requests" tab, click "New Pull Request", then select your feature branch from the compare dropdown. Click "Create Pull Request". Write a title and description for the pull request. Specific reviewers can be requested by clicking the gear icon by the "Reviewers" section on the sidebar, then selecting the desired contributor. When ready, again click the "Create Pull Request" button to submit the pull request. When finished, move the ticket to the "Ready For Review" section on the Kanban board.
### 7. Peer Review and Merge
Other contributors will review the code to ensure its quality. If no issues are found, the code will be merged into the project, and the ticket will be completed. Reviews will be submitted with one of three possibilities, called review actions. These are:

- **Comment**: This is a neutral option that neither accepts nor rejects the pull request.
- **Approve**: This option accepts the pull request.
- **Request for Change**: This option is a rejection and blocks the ability to merge until this option is resolved.

If a request for change has been made, a review must be requested from the reviewer who rejected the pull request, once the necessary changes have been made.

<span style="color:red">**DO NOT MERGE YOUR OWN CODE**</span>

If you wish to review a pull request made by someone else, click on the pull request you would like to review from the "Pull Requests" tab, then click on the "Files Changed" tab within the pull request. You can leave comments on specific lines in the diff view, or click "Start a Review" to submit comments when the review is finished. To test the code from the pull request, first determine the Pull Request ID number. This can be found alongside the title of the pull request. Then, open a terminal and type the commands

  ```
    git fetch origin pull/[Pull Request ID]/head:[New Branch Name]
    git checkout [Branch Name]
  ```
to add the pull request code to your local repository as a new branch. When finished reviewing, click the "Review Changes" button (this will be labeled "Finish Your Review" if the "Start A Review" button was clicked after adding a comment). Write a general summary of your review and select a review action.

If there is at least one approval, and no requests for change, the code from the pull request can then be merged into the master branch by clicking the "Merge Pull Request" button in the "Conversation" tab for the pull request. When finished, move the ticket to the "Done" section of the Kanban board.