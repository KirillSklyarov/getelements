import { Owner } from './owner';

export class Gist {
    url: string;
    forks_url: string;
    id: string;
    description: string;
    public: string;
    owner: Owner;
    user: null;
    files: any;
    truncated: boolean;
    comments: number;
    comments_url: string;
    html_url: string;
    git_pull_url: string;
    git_push_url: string;
    created_at: string;
    updated_at: string;

    getOwner(): string {
        if ('owner' in this) {
            return this.owner.login;
        } else {
            return 'Anonimous';
        }

    }

    isAnonimous(): boolean{
        return !('owner' in this);
    }

    getDate(): string {
        let date = new Date(this.created_at);
        return date.toLocaleString();
    }
    
    getAvatarUrl(): string {
        if ('owner' in this) {
            return this.owner.avatar_url;
        } else {
            return "";
        }
    }

}

