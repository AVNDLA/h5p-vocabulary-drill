declare const json: [
  {
    "label": "Task description",
    "name": "description",
    "description": "A guide telling the user how to answer this task.",
    "type": "text",
    "optional": true
  },
  {
    "label": "Source language",
    "name": "sourceLanguage",
    "description": "Choose the language of the source words.",
    "type": "select",
    "options": [
      { "value": "en", "label": "English" },
      { "value": "fr", "label": "French" },
      { "value": "de", "label": "German" },
      { "value": "nb", "label": "Norwegian bokmål" },
      { "value": "nn", "label": "Norwegian nynorsk" },
      { "value": "es", "label": "Spanish" }
    ],
    "default": "en"
  },
  {
    "label": "Target language",
    "name": "targetLanguage",
    "description": "Choose the language of the target words.",
    "type": "select",
    "options": [
      { "value": "en", "label": "English" },
      { "value": "fr", "label": "French" },
      { "value": "de", "label": "German" },
      { "value": "nb", "label": "Norwegian bokmål" },
      { "value": "nn", "label": "Norwegian nynorsk" },
      { "value": "es", "label": "Spanish" }
    ],
    "default": "nb"
  },
  {
    "label": "Words",
    "name": "words",
    "type": "text",
    "optional": true,
    "widget": "csv-to-text",
    "description": "Add words by uploading a CSV-file or write them in the text field.",
    "important": {
      "description": "<ul><li>Source and target words are separated with a comma (,).</li><li>Alternative answers are separated with a forward slash (/).</li><li>You may add a textual tip, using a colon (:) in front of the tip.</li></ul>",
      "example": "water/sea:w___r,vann/hav:v__n"
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "label": "Overall Feedback",
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%",
              "label": ""
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "label": "Localization",
    "name": "l10n",
    "type": "group",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "label": "No valid words",
        "name": "noValidWords",
        "default": "No valid words found. Please check your words and try again.",
        "type": "text"
      },
      {
        "label": "Label for \"Fill in\" answer mode",
        "name": "fillInLabel",
        "default": "Fill in",
        "type": "text"
      },
      {
        "label": "Label for \"Drag text\" answer mode",
        "name": "dragTextLabel",
        "default": "Drag text",
        "type": "text"
      },
      {
        "label": "Answer mode label",
        "name": "answerModeLabel",
        "default": "Answer mode",
        "type": "text"
      },
      {
        "label": "Language mode label",
        "name": "languageModeLabel",
        "default": "Swap languages",
        "type": "text"
      }
    ]
  },
  {
    "label": "Localization for Blanks",
    "name": "blanksl10n",
    "importance": "low",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Text for \"Show solutions\" button",
        "name": "showSolutions",
        "type": "text",
        "default": "Show solution"
      },
      {
        "label": "Text for \"Retry\" button",
        "name": "tryAgain",
        "type": "text",
        "default": "Retry",
        "optional": true
      },
      {
        "label": "Text for \"Check\" button",
        "name": "checkAnswer",
        "type": "text",
        "default": "Check",
        "optional": true
      },
      {
        "label": "Text for \"Submit\" button",
        "name": "submitAnswer",
        "type": "text",
        "default": "Submit",
        "optional": true
      },
      {
        "label": "Text for \"Not filled out\" message",
        "name": "notFilledOut",
        "type": "text",
        "default": "Please fill in all blanks to view solution",
        "optional": true
      },
      {
        "label": "Text for \"':ans' is correct\" message",
        "name": "answerIsCorrect",
        "type": "text",
        "default": "':ans' is correct",
        "optional": true
      },
      {
        "label": "Text for \"':ans' is wrong\" message",
        "name": "answerIsWrong",
        "type": "text",
        "default": "':ans' is wrong",
        "optional": true
      },
      {
        "label": "Text for \"Answered correctly\" message",
        "name": "answeredCorrectly",
        "type": "text",
        "default": "Answered correctly",
        "optional": true
      },
      {
        "label": "Text for \"Answered incorrectly\" message",
        "name": "answeredIncorrectly",
        "type": "text",
        "default": "Answered incorrectly",
        "optional": true
      },
      {
        "label": "Assistive technology label for solution",
        "name": "solutionLabel",
        "type": "text",
        "default": "Correct answer:",
        "optional": true
      },
      {
        "label": "Assistive technology label for input field",
        "name": "inputLabel",
        "type": "text",
        "description": "Use @num and @total to replace current cloze number and total cloze number",
        "default": "Blank input @num of @total",
        "optional": true
      },
      {
        "label": "Assistive technology label for saying an input has a tip tied to it",
        "name": "inputHasTipLabel",
        "type": "text",
        "default": "Tip available",
        "optional": true
      },
      {
        "label": "Tip icon label",
        "name": "tipLabel",
        "type": "text",
        "default": "Tip",
        "optional": true
      },
      {
        "name": "scoreBarLabel",
        "type": "text",
        "label": "Textual representation of the score bar for those using a readspeaker",
        "default": "You got :num out of :total points"
      },
      {
        "name": "a11yCheck",
        "type": "text",
        "label": "Assistive technology description for \"Check\" button",
        "default": "Check the answers. The responses will be marked as correct, incorrect, or unanswered."
      },
      {
        "name": "a11yShowSolution",
        "type": "text",
        "label": "Assistive technology description for \"Show Solution\" button",
        "default": "Show the solution. The task will be marked with its correct solution."
      },
      {
        "name": "a11yRetry",
        "type": "text",
        "label": "Assistive technology description for \"Retry\" button",
        "default": "Retry the task. Reset all responses and start the task over again."
      },
      {
        "name": "a11yCheckingModeHeader",
        "type": "text",
        "label": "Assistive technology description for starting task",
        "default": "Checking mode"
      }
    ]
  },
  {
    "label": "Localization for DragText",
    "name": "dragtextl10n",
    "importance": "low",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Text for \"Check\" button",
        "name": "checkAnswer",
        "type": "text",
        "default": "Check"
      },
      {
        "label": "Text for \"Submit\" button",
        "name": "submitAnswer",
        "type": "text",
        "default": "Submit"
      },
      {
        "label": "Text for \"Retry\" button",
        "name": "tryAgain",
        "type": "text",
        "default": "Retry"
      },
      {
        "label": "Text for \"Show Solution\" button",
        "name": "showSolution",
        "type": "text",
        "default": "Show solution"
      },
      {
        "label": "Numbered Drop zone label",
        "name": "dropZoneIndex",
        "type": "text",
        "default": "Drop Zone @index.",
        "description": "Label used for accessibility, where the Read speaker will read the index of a drop zone. Variable available: @index"
      },
      {
        "label": "Empty Drop Zone label",
        "name": "empty",
        "type": "text",
        "default": "Drop Zone @index is empty.",
        "description": "Label used for accessibility, where the Read speaker will read that the drop zone is empty"
      },
      {
        "label": "Contains Drop Zone label",
        "name": "contains",
        "type": "text",
        "default": "Drop Zone @index contains draggable @draggable.",
        "description": "Label used for accessibility, where the Read speaker will read that the drop zone contains a draggable"
      },
      {
        "label": "Draggable elements label",
        "name": "ariaDraggableIndex",
        "type": "text",
        "default": "@index of @count draggables.",
        "description": "Label used for accessibility, where the Read speaker reads that this is a draggable element. Variable available: @index, @count"
      },
      {
        "label": "Label for show tip button",
        "name": "tipLabel",
        "type": "text",
        "default": "Show tip",
        "description": "Label used for accessibility, where the Read speaker reads it before the tip is read out"
      },
      {
        "name": "correctText",
        "type": "text",
        "label": "Readspeaker text for correct answer",
        "default": "Correct!"
      },
      {
        "name": "incorrectText",
        "type": "text",
        "label": "Readspeaker text for incorrect answer",
        "default": "Incorrect!"
      },
      {
        "name": "resetDropTitle",
        "type": "text",
        "label": "Confirmation dialog title that user wants to reset a droppable",
        "default": "Reset drop"
      },
      {
        "name": "resetDropDescription",
        "type": "text",
        "label": "Confirmation dialog description that user wants to reset a droppable",
        "default": "Are you sure you want to reset this drop zone?"
      },
      {
        "name": "grabbed",
        "type": "text",
        "label": "Label used for accessibility, where the read speaker indicates that dragging is initiated",
        "default": "Draggable is grabbed."
      },
      {
        "name": "cancelledDragging",
        "type": "text",
        "label": "Label used for accessibility, where the read speaker indicates that dragging is canceled",
        "default": "Cancelled dragging."
      },
      {
        "name": "correctAnswer",
        "type": "text",
        "label": "Label used for accessibility, where the read speaker indicates that a text is the correct answer",
        "default": "Correct answer:"
      },
      {
        "name": "feedbackHeader",
        "type": "text",
        "label": "Header for panel containing feedback for correct/incorrect answers",
        "default": "Feedback"
      },
      {
        "name": "scoreBarLabel",
        "type": "text",
        "label": "Textual representation of the score bar for those using a readspeaker",
        "default": "You got :num out of :total points"
      },
      {
        "name": "a11yCheck",
        "type": "text",
        "label": "Assistive technology label for \"Check\" button",
        "default": "Check the answers. The responses will be marked as correct, incorrect, or unanswered."
      },
      {
        "name": "a11yShowSolution",
        "type": "text",
        "label": "Assistive technology label for \"Show Solution\" button",
        "default": "Show the solution. The task will be marked with its correct solution."
      },
      {
        "name": "a11yRetry",
        "type": "text",
        "label": "Assistive technology label for \"Retry\" button",
        "default": "Retry the task. Reset all responses and start the task over again."
      }
    ]
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "fields": [
      {
        "label": "Enable \"Retry\"",
        "importance": "low",
        "name": "enableRetry",
        "type": "boolean",
        "default": true
      },
      {
        "label": "Enable \"Show solution\" button",
        "importance": "low",
        "name": "enableSolutionsButton",
        "type": "boolean",
        "default": true
      },
      {
        "label": "Automatically check answers after input",
        "importance": "low",
        "name": "autoCheck",
        "type": "boolean",
        "default": false
      },
      {
        "name": "caseSensitive",
        "importance": "low",
        "type": "boolean",
        "default": true,
        "label": "Case sensitive",
        "description": "Makes sure the user input has to be exactly the same as the answer."
      },
      {
        "label": "Require all fields to be answered before the solution can be viewed",
        "description": "This option is only valid if the answer mode is set to \"Fill in\".",
        "importance": "low",
        "name": "showSolutionsRequiresInput",
        "type": "boolean",
        "default": true
      },
      {
        "name": "acceptSpellingErrors",
        "type": "boolean",
        "label": "Accept minor spelling errors",
        "importance": "low",
        "description": "If activated, an answer will also count as correct with minor spelling errors (3-9 characters: 1 spelling error, more than 9 characters: 2 spelling errors). This option is only valid if the answer mode is set to \"Fill in\".",
        "default": false
      },
      {
        "label": "Randomize",
        "name": "randomize",
        "type": "boolean",
        "default": true
      },
      {
        "label": "Show tips",
        "name": "showTips",
        "type": "boolean",
        "default": false
      },
      {
        "label": "Answer mode",
        "name": "answerMode",
        "type": "select",
        "widget": "radioGroup",
        "alignment": "horizontal",
        "options": [
          { "label": "Fill in", "value": "fillIn" },
          { "label": "Drag text", "value": "dragText" }
        ],
        "default": "fillIn"
      },
      {
        "name": "enableSwitchAnswerModeButton",
        "type": "boolean",
        "label": "Enable \"Switch answer mode\" button",
        "importance": "low",
        "description": "Allow the end user to switch between modes \"Fill in\" and \"Drag text\".",
        "default": false
      },
      {
        "name": "enableSwitchWordsButton",
        "type": "boolean",
        "label": "Enable \"Switch language mode\" button",
        "importance": "low",
        "description": "Allow the end user to switch between source and target words.",
        "default": false
      },
      {
        "label": "Number of words",
        "name": "numberOfWordsToShow",
        "description": "Defines how many words that will be visible each time. If 0 is set, all words will be shown.",
        "type": "number",
        "optional": true
      },
      {
        "label": "Enable multiple pages",
        "name": "enableMultiplePages",
        "description": "If \"Number of words\" is set to a lower number then the word count, this option will enable multiple pages.",
        "type": "boolean",
        "default": false
      }
    ]
  }
]

export default json;