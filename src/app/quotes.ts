export class Quotes {
  showDescription: boolean;
  constructor(public quote: string, public author: string, public submitter: string, public upvote: number, public downvote: number, public date: Date){
    this.showDescription=false;
  }
}
