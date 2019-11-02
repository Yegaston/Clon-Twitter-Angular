export class Post {
    constructor(
        public body: string,
        public author?: string,
        public date?: number,
        public commentsId?: any,
        public meta?: { likes: number, clicks: number }
    ) { }
}
