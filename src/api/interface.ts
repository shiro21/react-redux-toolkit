export interface CounterProps {
    counter: {
        count: number
    }
}

export interface PostsListProps {
    posts: [
        {
            id: string,
            title: string,
            content: string
        }
    ]
}
export interface PostsProps {
    id: string,
    title: string,
    content: string
}