class Question {
	private _author : string;
	private _lastEditDate : Date;
	private _editHistory : Object[]; // Change to an EditLog class array

	constructor( public questionText : string, public answerText : string, public category : string, public pointValue : number, public contextNotes : string) {

	}
}

// export = Question;
