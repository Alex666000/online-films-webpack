import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';

export interface MovieDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
