export class Post {
    constructor(
        public author: string,
        public date: number,
        public body: string,
        public commentsId: any,
        public meta: { likes: number, clicks: number }
    ) { }
}
