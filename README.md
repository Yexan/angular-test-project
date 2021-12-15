# angular-test-project


EDIT : 

On this branch I did an exemple of the approach with BehaviorSubject but I didn't took the time to make components for the list and the note display yet.

---

Hello 😊

This is the beginning of a small Notes app

![Note app screenshot](https://github.com/Yexan/angular-test-project/blob/main/notes.png)

Here are the goals for today :
+ create the component for the notes list, for the note display
+ create a service to handle the state of the notes (list, current, add, remove)
+ Use the notes in the ts file provided
+ there is a note type, you can use it and if you want to modify it, or the provided values, go ahead there is no restrictions
+ *Preferred* : Use behavior subject to display the currently displayed note (You can add a state to ask to click on a note if there is none selected, or choose to display by default the first one, as you prefer)
+ Add navigation on click in the note list and next / prev buttons
+ If you have remaining time :
  - add a delete button to delete a note in the list
  - add an add button to add a note

To be more handy we have an api/notes.ts file to simulate a server response. You can just import the file, if you had time to add notes, it's ok if it doesn't save the notes when you refresh, it's not a real project

If you want to add an interface element to add notes, it's alright if you don't use angular routing I haven't designed this quickie with routes the goal was more to use BehaviorSubject and Subscription from rxjs as we use it in some of our projects 😊

If you chose a different approach because you never worked with behavior subject and think it might be too short to learn how it works it's ok there is a lot of ways to achieve the same result


Don't worry if everything is not complete by the end of the hour

Have fun, see you soon 🎉
