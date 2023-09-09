import { Comment } from './comment';
import { Media } from './media';
import { RedditFlair } from './reddit-flair';

export type RedditPost = {
  redditPostId: string;
  authorId: string;
  authorName: string;
  subRedditName: string;
  media: Media | undefined;
  title: string;
  content: string;
  redditFlair: RedditFlair;
  likes: number;
  dislikes: number;
  dateOfCreation: Date;
  comments: Comment[];
};
