# Daily Questions FAQ

## How can I backup or restore my data?

See section [How can I export my questions?](#how-can-i-export-my-questions)

## How can I export my questions?

Note this feature is experimental. Use at your own risk.

1. Open the Daily Questions app.
2. Open the drawer menu (either tap the hamburger menu at the top-left, or swipe from left side of the screen to the right) and select 'Settings'.
3. Under 'Advanced', activate 'Development mode', read the warning, and confirm the dialog if you are understand the risk.
4. Under 'Advenced', select '(Experimental) Export to file'.
5. Select the location where you want to save the file and confirm.
6. Wait until the export is finished and shows the success message.
7. You can now close the app now and open your file manager or file browser app of your choice.
8. Navigate to the location where you saved the file and do whatever you like with the file.

### JSON file format

The following example shows the structure of the exported JSON file. It contains the questions and your answer history.

Each question has an `id`. The `history` object uses `qs` (short for 'questions') and `a` (short for 'answer') as keys. There is one object for each day you answered the daily questions in the `history` array.

Note that the following is not valid JSON as it contains comments. Remove the comments if you want to use it as a template.

```json
{
  "questions": [
    {
      "title": "Goals",
      "id": "a1b2c3d4",
      "questionLong": "Did I do my best to set clear goals today?",
      "type": "points",
      "active": true
    },
    {
      "title": "Highlight",
      "id": "aaaabbbb",
      "questionLong": "What was my personal highlight today and why?",
      "type": "fulltext",
      "active": true
    }
  ],
  "history": [
    {
      // one entry for each day that you answered the daily questions
      "date": "2024-01-01",
      // qs is short for 'questions'
      "qs": [
        {
          // the id of the question being answered
          "id": "a1b2c3d4",
          // a is short for 'answer'
          "a": 5
        },
        {
          "id": "aaaabbbb",
          "a": "Got to write some documentation."
        }
      ]
    },
    {
      "date": "2024-01-02",
      "qs": [
        {
          "id": "a1b2c3d4",
          "a": 10
        },
        {
          "id": "aaaabbbb",
          "a": "More documentation."
        }
      ]
    }
  ]
}
```

## How can I import my questions and answers?

Note this feature is experimental. Use at your own risk.

This is similar to the Export feature prescribed above. Follow the instructions above but instead of selecting 'Export to file', select 'Import from file'. Then select the `.json` file you want to import and confirm. The file structure must match the [JSON File Format](#json-file-format). On success, the app will show a success message. Double-check your questions or your history. You should now be able to use the app as normal. Congratulations.

If you run into any issues, please contact us under the email address provided on the Play Store, or create a publicly visible [GitHub issue](https://github.com/mkraenz/teatime/issues). Make sure to **NOT** include any personal data in the issue description though.
