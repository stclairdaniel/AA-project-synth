import React from 'react';
import Note from '../../util/note';
import {TONES, NOTE_NAMES} from '../../util/tones';
import $ from 'jquery';
// import {keyMap} from '../../reducers/notes_reducer';

const keyMap = {"C5": 'a' ,
                "D5": "s",
                "E5": 'd',
                "F5": 'f',
                "G5": 'g'};


class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map((noteName) => {
      return new Note(TONES[noteName]);
    });
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  onKeyDown (e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp (e) {
    this.props.keyReleased(e.key);
  }

  playNotes () {
    let func = this;
    NOTE_NAMES.forEach ((note, idx) => {
      // debugger
      if (func.props.notes.includes(keyMap[note])) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  componentDidMount () {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  render() {
    this.playNotes();
    return (
      <ul>
        {NOTE_NAMES}
      </ul>
    );
  }
}

export default Synth;
