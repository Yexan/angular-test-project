import { Component, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import { notes } from './api/notes'
import { Note } from './shared/model/note'
import { NoteStateService } from './shared/state/note-state.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnDestroy {

  notes: Note[] = []
  notesSubscription: Subscription

  currentNote: Note|null = null
  currentNoteSubscription: Subscription


  constructor(private _notesState: NoteStateService) {
    this.notesSubscription = this._notesState.notesStream.subscribe(
      (notes) => this.notes = notes 
    )
    this.currentNoteSubscription = this._notesState.currentNoteStream.subscribe(
      (note) => this.currentNote = note
    )

    // Simulate API Call
    this._notesState.setNotes(notes)
    if (this.notes.length) {
      this.selectNote(this.notes[this.notes.length - 1])
    }
  }
  
  selectNote(note: Note) {
    this._notesState.setCurrentNote(note)
  }

  deleteNote(note: Note) {
    this._notesState.deleteNote(note)
  }

  addNewNote() {
    // Todo with an interface
    const randomNumber = Math.round(Math.random() * 50)
    this._notesState.addNote(
      new Note('Test title ' + randomNumber, 'test description ' + randomNumber, '02/12/1990')
    )
  }

  displayNextNote() {
    this._notesState.selectNextNote()
  }

  displayPreviousNote() {
    this._notesState.selectPreviousNote()
  }

  ngOnDestroy() {
    this.notesSubscription.unsubscribe()
    this.currentNoteSubscription.unsubscribe()
  }
}
