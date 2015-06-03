A quick way to use [Wufoo](https://www.wufoo.com/) Forms in your React Application.

## Demo & Examples

Live demo: [seethroughtrees.github.io/react-wufoo-embed](http://seethroughtrees.github.io/react-wufoo-embed/)

## Installation

Install the component from [npm](#).

```
npm install react-wufoo-embed --save
```

## Usage

Import the component and add the required attributes, that's it!  

```
var WufooForm = require('react-wufoo-embed');

<WufooForm userName="*your username*" formHash="*your formId*" />
```

*You can also get the embed code directly from the 'Share tab' in the Wufoo Admin*

### Properties

The following props are required:

**userName** *[String]* - Your Wufoo username.
**formHash** *[String]* - The FormId of your Wufoo Form.

Optional:
**header** *[String] default: 'show'* - 'show' or 'hide' the header of your form.
**autoResize** *[String] default: true* - Auto size the height of your form.
**height** *[String]* - Override the height of your form if **autoResize** is set to false.
**async** *[Boolean] default: true* - Disable async loading of your form.
**ssl** *[Boolean] default: true* - Disable this if you want to force non-secure http.


### Contributions

Pull requests are always welcomed.  Just make sure to create an issue first, and set the PR to the 'upstream' branch instead of Master.  Thanks!

Copyright (c) 2015 seethroughtrees.
