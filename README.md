# **Welcome to Immigrants project!**

Welcome to the "Immigrants" project! The idea of "Immigrants" is to help people who have emigrated from their countries. Our goal is to create a community of immigrants to help them settle in a new place, we want to give them the opportunity to organize events, help each other, find friends, communicate, and provide financial assistance. The following will describe in detail how to work with the project.

# **Docs**

### **Scripts**

#### `npm run start`
To run the project in development mode with hot-reload enabled - run:
`npm run start`

The page will automatically open at [http://localhost:4200](http://localhost:4200)

With hot-reload enabled, the page will update automatically as soon as you apply changes to the file.
You can also view linter errors in the console.

#### `npm run build:dev`
To build the project in development mode - run:
`npm run build:dev`

After the build, the `dist` folder will appear in the root of the project, in which the changed bundles will be located
Unlike production builds, dev builds don't minify files, but change their names to hash's

#### `npm run build:prod`
To build the project in production mode - run:
`npm run build:prod`

After the build, the `dist` folder will appear at the root of the project, in which the changed bundles will be located
On production build, all .js, .jsx, .css, .json, .png ... files are minified to reduce file sizes

#### `npm run clean`
To clean up the project - run:
`npm run clean`

This script removes the `dist` folder from the project root.

#### **Semver Scripts**
To run these commands, you must first commit using `git add .` `git commit -m ""`. Read more in [this](#versioning) block.

#### `npm run release:major`
To update "Major" version - run:
`npm run release:major`

This command will prepare a commit, update the application version, and generate a `CHANGELOG.md` file. To push changes, use the command [`push-dev`](#npm-run-push-dev)

#### `npm run release:minor`
To update "Minor" version - run:
`npm run release:minor`

This command will prepare a commit, update the application version, and generate a `CHANGELOG.md` file. To push changes, use the command [`push-dev`](#npm-run-push-dev)

#### `npm run release:patch`
To update "Patch" version - run:
`npm run release:patch`

This command will prepare a commit, update the application version, and generate a `CHANGELOG.md` file. To push changes, use the command [`push-dev`](#npm-run-push-dev)

#### `npm run release`
To update the application version - run:
`npm run release`

This command will update the version and create a `CHANGELOG.md` file, depending on the commit type. If the type is "feat" - will update the "Minor" version, and if all the rest - the "Patch" version. Use this command when using a commit type other than "fix" and "feat"

You can also use flags:

* `-- --release-as <major or minor or patch>` - will update the specified version. Example:

		npm run release -- --release-as minor

		// 1.1.1 --> 1.2.0

* `-- --prerelease <name>` - will update the Pre-release version. Example:

		npm run release -- --prerelease beta

		// 1.1.1 --> 1.1.1-beta.0

#### `npm run push-dev`
To push a commit to a github repository, run:
`npm run push-dev`

This command will push the changes to the "develop" branch in git.

### Code style guide

This project has style rules in which the code must be written. So this is a joint project - the style of each programmer may be different, which negatively affects the project.

General rules:
* Do not use semicolons (";") at the end of expressions. Yes, in very rare cases it can cause an error, but without the ";" the code looks prettier + the rest of the linter settings should exclude the possibility of making mistakes that could potentially cause an error due to the absence of ";"

	Good code example &#128077;

		const variable = 'test'

		function repeat(num) {
			return variable * num
		}

		console.log(repeat(5))

	Bad code example &#128078;

			const variable = 'test';

			function repeat(num) {
				return variable * num;
			};

			console.log(repeat(5));

* Use camelCase to name variables, functions, and so on. Let me remind you that camelCase means that you start writing in lowercase, but start each new word with a capital letter. Example: `testNameOfCamelCaseVariable`, `someFunction`, `variable`. However, there are a number of exceptions: we start the names of classes and components with a capital letter, for example: `TestClass`, `ModalComponent`

* Use only strict comparisons: `===` и  `!==`.

		// bad
		if (a == b || b != c) {...}

		// good
		if (a === b || b !== c) {...}

* Use single quotes ('') everywhere except for html and jsx tags, use double quotes inside the tag ("")

		// bad
		const arr = ["test", "test", "test]
		<div class='test'></div>

		// good
		const arr = ['test', 'test', 'test']
		<div class="test"></div>

* Use only tabs for indentation, do not use spaces. Tab interval size: 2

* Always add an empty line at the end of a file

* _You can see the full list of rules in the file `.eslintrc`_

> Failure to follow these rules can lead to errors, if you get an error from linter - copy its name and find this rule on the [website]('https://eslint.org/docs/rules/'), read what it is, and correct it.

### Versioning

Versioning is an important part of any project, with its help you can easily understand what changes have taken place in the project and quickly upgrade to a new version or rollback to an old, but stable one.

In this project, we will use "semantic versioning", also known as "SemVer". What does it represent?

		1.2.3-beta.1
		| | |  |________ Pre-release
		| | |___________ Patch
		| |_____________ Minor
		|_______________ Major

The semantic version consists of four parts: **Major**, **Minor**, **Patch** and **Pre-release**.
Each of them denotes a specific type of change that has been introduced in the new version. However, only the first three parts are required: "Major", "Minor" and "Patch". "Pre-release" we will use only when the project is almost ready for the release of the first version.

* **Major** - Increases when major changes are made. In this case, since we are talking about the site when such changes occur they may break old versions or add new business logic. For example, you added a side menu to the site, with which you can now write a post, but in the old version of the application, there was no such function. It's very difficult to explain when to upgrade the "Major" version, so it's easier to explain with api example - "Major" version is upgraded when the api changes back in an incompatible way, for example, you added the account activation function in the new version. But, all the same, we are not considering api here, so I will make notes on tasks that will change the "Major" version.

* **Minor** - incremented when minor changes are made, new functionality is added, and they do not break backward compatibility. Example: you added a feedback button to the site - this did not break the application for older versions, but simply added a new feature. After upgrading the "Major" version, you must reset the "Minor" version, that is, after version 3.23 comes version 4.0, not 4.24.

* **Patch** - increases when fixing bugs, refactorings, and other changes that do not break anything, but do not add new features. Example: you fixed a bug where clicking on the "Register" button did not open the registration page. Or you changed the color of a button, a modal window. When increasing "Major" or "Minor", you must reset "Patch" to 0.

* **Pre-release** is an optional dot-separated list separated from the three version numbers by a minus sign. For example: "1.1.0-beta.2". Used instead of tags to "mark" certain milestones in development. Usually, it is “alpha”, “beta”, or “release candidate” (“rc”). Where “alpha” is a minor version, and “release candidate” is a higher version, after the version is given to the user, that is, changes are made directly to the site.

But how do you update the version when you made changes?

Generally, the version of the project is in the "version" field in the `package.json` file. It can be changed manually, but with this approach, it will be difficult to maintain `CHANGELOG.md`, since you have to do it manually. Also, with this approach, it is easy to forget that you need to update the version, which can cause problems. Therefore, in this project, we will use the "standard-version" library for version control.

Once you've completed your changes, you'll need to commit them to git and push them to this github repository. This is usually done like this:

		git add .	// adds all files to the git tracking area

		git commit -m "some commit"  // makes a commit

		git push -u origin develop  // push changes to the develop branch in the github repository.

But, since we are using the "standard-version" library, you will need to use scripts, which you can learn [here](#semver-scripts), it's done like this:

		git add .

		git commit -m "feat: some commit"

		npm run release:minor // increases the minor version

		npm run push-dev // publishes a commit to a github repository


Excellent! Now, all changes are uploaded to git, the version is increased, and a record about this version is generated in `CHANGELOG.md`. However, this is not all you need to know about versioning, so that other developers and you can easily understand commits, you must adhere to the commit naming convention. More on that in the next block.

#### Conventional Commits

Naming commits correctly is very important. This allows you to immediately understand what changes were made and what they affected. There is a commitment convention that you must adhere to.

Commit messages should have the following structure:

		<type>: <description>

		[optional body]


Here is a list of the types of commits you should use at the beginning of a commit name:

* **feat** - should be used when adding new functionality.

* **fix** - should be used when fixing bugs or small changes, for example: changing the color of a button. This includes all "Patch" changes.

* **docs** - should be used when changing documentation.

* **style** - should be used for changes that do not affect the code (spaces, tabs, formatting, etc).

* **refactor** - should be used for changes not related to fixing bugs and adding features. Example:

		// was
		<Component
			onClick={function(arg1, arg2) {
				console.log(arg1 +  arg2)
			}}
		>
		</Component>

		// became
		<Component
			onClick={(arg1, arg2) => console.log(arg1 + arg2)}
		>
		</Component>


* **perf** - should be used for performance related changes

* **chore** - changes related to updating libraries, code support, etc.

The -m flag is used to give a description to a commit:

		git commit -m "type: description" -m "body"

The first flag specifies a short description of the commit, and the second flag specifies the full description of the commit.


Good commit example &#128077;

		git commit -m "feat: Add testFunction to index.js file" -m "This function take two arguments, adds them and outputs the sum"

Bad commit example &#128078;

		git commit -m "something happens"
