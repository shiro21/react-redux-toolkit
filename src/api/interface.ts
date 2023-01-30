// Counter 관련
export interface CounterProps {
    counter: {
        count: number
    }
}

// Posts 관련
export interface PostsListProps {
    posts: [
        {
            id: string,
            title: string,
            content: string,
            userId: string,
            date: string,
            reactions: {
                thumbsUp: number,
                wow: number,
                heart: number,
                rocket: number,
                coffee: number
            }
        }
    ]
}
export interface PostsProps {
    id: string,
    title: string,
    content: string,
    userId: string,
    date: string,
    reactions: {
        thumbsUp: number,
        wow: number,
        heart: number,
        rocket: number,
        coffee: number
    }
}

export interface ReactionProps {
    postId: string,
    reaction: string
}

// Users 관련
export interface UsersProps {
    users: [
        {
            id: string,
            name: string
        }
    ]
}