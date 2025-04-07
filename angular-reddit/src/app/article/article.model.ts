export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    domain(): string | null {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {

        if (this.votes > 0)
            this.votes -= 1;

    }


}