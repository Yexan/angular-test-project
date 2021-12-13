import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Note } from '../model/note'


@Injectable({
  providedIn: 'root'
})
export class NoteStateService {

  notesStream = new BehaviorSubject<Note[]>([])
  currentNoteStream = new BehaviorSubject<Note|null>(null)

  constructor() {}

  setNotes(notes: Note[]) {
    this.notesStream.next(notes)
  }

  addNote(newNote: Note) {
    this.setNotes([...this.notesStream.value, newNote])
    this.setCurrentNote(newNote)
  }

  selectPreviousNote(){
    const notes = this.notesStream.value
    const currentNote = this.currentNoteStream.value
    if (!currentNote) return
    const noteIndex = notes.indexOf(currentNote)
    if (noteIndex < 1) {
      this.setCurrentNote(notes[notes.length - 1])
    } else {
      this.setCurrentNote(notes[noteIndex - 1])
    }
  }

  selectNextNote(){
    const notes = this.notesStream.value
    const currentNote = this.currentNoteStream.value
    if (!currentNote) return
    const noteIndex = notes.indexOf(currentNote)
    if (noteIndex === notes.length - 1) {
      this.setCurrentNote(notes[0])
    } else {
      this.setCurrentNote(notes[noteIndex + 1])
    }
  }

  setCurrentNote(note: Note|null) {
    this.currentNoteStream.next(note)
  }

  deleteNote(note: Note) {
    const notes = this.notesStream.value
    const noteIndex = notes.indexOf(note)
    if (noteIndex > -1) {
      const newNotes = notes.slice()
      newNotes.splice(noteIndex, 1)
      this.setNotes(newNotes)
      if (note === this.currentNoteStream.value) {
        this.setCurrentNote(null)
      }
    } else {
      throw new Error('Cannot delete a non existing note')
    }
  }
}
