export interface IUser{
id: number;
username: string;
full_name: string;
email: string;
password: string;
gender: string;
avatar: string;
n_follower: number;
n_following: number;
n_posts: number;
}

export interface IPost{
    id: number;
    content: string;
    post_owner: string;
    post_date: Date;
    post_likes: number;
    post_comments: string[];
}

export interface IName{
    username: string;
}